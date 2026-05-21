import React, { useEffect, useRef, useState } from "react";
import "./SearchBox.css";
import { useNavigate, useLocation } from "react-router-dom";
import { data, URL_TITLES } from "../assets/search-index.js";

function removeHighlights() {
	document.querySelectorAll("mark.search-highlight").forEach((mark) => {
		const parent = mark.parentNode;
		parent.replaceChild(document.createTextNode(mark.textContent), mark);
		parent.normalize();
	});
}

// ── Search helpers ─────────────────────────────────────────────────────

function titleFor(entry) {
	const meta = URL_TITLES[entry.url];
	if (meta) return meta.title;
	return entry.title || entry.ip || entry.url;
}

function crumbFor(entry) {
	const meta = URL_TITLES[entry.url];
	if (meta) return meta.crumb;
	if (entry.qii && entry.ip) return entry.qii + " \u00b7 " + entry.ip;
	return entry.qii || entry.ip || "";
}

function tokenize(q) {
	return q.toLowerCase().split(/\s+/).filter((t) => t.length > 0);
}

function categoryOf(url) {
	if (url === "/") return { key: "home", label: "Home" };
	if (url === "/fundamentals_of_qii") return { key: "about", label: "Fundamentals" };
	if (url === "/site-map") return { key: "site", label: "Site Map" };
	if (url === "/contact-us") return { key: "site", label: "Contact" };
	if (/^\/qii\d$/.test(url)) return { key: "principle", label: "Principle" };
	if (/^\/qii\dcasestudy\d$/.test(url)) return { key: "case", label: "Case Study" };
	return { key: "sub", label: "Sub-topic" };
}

function scoreEntry(entry, queryLower, tokens) {
	if (!tokens.length) return 0;
	const pageTitle = titleFor(entry).toLowerCase();
	const title = (entry.title || "").toLowerCase();
	const ip = (entry.ip || "").toLowerCase();
	const content = (entry.content || "").toLowerCase();
	const qii = (entry.qii || "").toLowerCase();

	for (let i = 0; i < tokens.length; i++) {
		const tok = tokens[i];
		if (
			pageTitle.indexOf(tok) === -1 &&
			title.indexOf(tok) === -1 &&
			ip.indexOf(tok) === -1 &&
			content.indexOf(tok) === -1 &&
			qii.indexOf(tok) === -1
		) {
			return 0;
		}
	}
	let s = 0;
	if (pageTitle.indexOf(queryLower) !== -1) {
		s += 200;
		if (pageTitle.indexOf(queryLower) === 0) s += 50;
	}
	if (title.indexOf(queryLower) !== -1) s += 80;
	if (ip.indexOf(queryLower) !== -1) s += 60;
	if (qii.indexOf(queryLower) !== -1) s += 25;
	if (content.indexOf(queryLower) !== -1) {
		s += 20;
		if (content.indexOf(queryLower) < 200) s += 12;
	}
	tokens.forEach((tok) => {
		if (pageTitle.indexOf(tok) !== -1) s += 14;
		else if (title.indexOf(tok) !== -1) s += 10;
		else if (ip.indexOf(tok) !== -1) s += 6;
		else if (content.indexOf(tok) !== -1) s += 2;
	});
	return s;
}

function searchCorpus(query) {
	const q = query.trim();
	if (q.length < 2) return [];
	const queryLower = q.toLowerCase();
	const tokens = tokenize(q);

	const scored = [];
	data.forEach((entry) => {
		const s = scoreEntry(entry, queryLower, tokens);
		if (s > 0) scored.push({ entry, score: s });
	});

	// Dedupe by URL (keep best-scoring entry per page)
	const byUrl = {};
	scored.forEach((r) => {
		const prev = byUrl[r.entry.url];
		if (!prev || prev.score < r.score) byUrl[r.entry.url] = r;
	});

	const out = Object.values(byUrl);
	out.sort((a, b) => b.score - a.score);
	return out;
}

function escapeHtml(s) {
	return s.replace(/[&<>"']/g, (c) =>
		({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
	);
}

function highlightTokens(text, tokens) {
	const escaped = escapeHtml(text);
	if (!tokens.length) return escaped;
	const pattern = tokens
		.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
		.join("|");
	return escaped.replace(new RegExp("(" + pattern + ")", "gi"), "<mark>$1</mark>");
}

const GROUP_ORDER = ["principle", "sub", "case", "about", "site", "home"];
const GROUP_LABELS = {
	principle: "PRINCIPLES",
	sub: "SUB-TOPICS",
	case: "CASE STUDIES",
	about: "FUNDAMENTALS",
	site: "SITE",
	home: "HOMEPAGE",
};

// ── Component ──────────────────────────────────────────────────────────

export default function SearchBox() {
	const navigate = useNavigate();
	const location = useLocation();
	const [query, setQuery] = useState(() => {
		// Initialize from route state when mounting after a home-page search
		return location.state?.highlightText || "";
	});
	const timerRef = useRef(null);
	const [results, setResults] = useState([]);
	const [focusIdx, setFocusIdx] = useState(-1);
	const [showEmpty, setShowEmpty] = useState(false);
	const searchPageRef = useRef(
		location.state?.highlightText ? location.pathname : null
	);
	const resultsRef = useRef(null);

	// Clear search when navigating away from the searched page
	useEffect(() => {
		if (searchPageRef.current && location.pathname !== searchPageRef.current) {
			searchPageRef.current = null;
			setQuery("");
			setResults([]);
			removeHighlights();
			window.dispatchEvent(new CustomEvent("clearSearchHighlight"));
		}
	}, [location.pathname]);

	const runSearch = (value) => {
		setQuery(value);
		setFocusIdx(-1);
		if (!value) {
			setResults([]);
			return;
		}
		if (value.length > 1) {
			if (timerRef.current) clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => {
				if (value.trim() === "") {
					setResults([]);
					setShowEmpty(false);
					return;
				}
				const found = searchCorpus(value);
				setResults(found);
				setShowEmpty(found.length === 0);
			}, 300);
		} else {
			setResults([]);
		}
	};

	const handleSearch = (e) => runSearch(e.target.value);

	const clearSearch = () => {
		setQuery("");
		setResults([]);
		setFocusIdx(-1);
		setShowEmpty(false);
		removeHighlights();
		window.dispatchEvent(new CustomEvent("clearSearchHighlight"));
	};

	const handleResultClick = (item) => {
		searchPageRef.current = item.entry.url;
		navigate(item.entry.url, {
			state: {
				highlightText: query,
				scrollToId: item.entry.secId || null,
			},
		});
		setResults([]);
		setFocusIdx(-1);
		setShowEmpty(false);
	};

	// Build flat list of results for keyboard nav
	const flatResults = React.useMemo(() => {
		if (!results.length) return [];
		const groups = {};
		results.forEach((r) => {
			const k = categoryOf(r.entry.url).key;
			(groups[k] || (groups[k] = [])).push(r);
		});
		const groupKeys = Object.keys(groups).sort((a, b) => {
			const diff = groups[b][0].score - groups[a][0].score;
			if (diff !== 0) return diff;
			return GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b);
		});
		const flat = [];
		groupKeys.forEach((k) => {
			groups[k].forEach((r) => flat.push(r));
		});
		return flat;
	}, [results]);

	const handleKeyDown = (e) => {
		if (results.length === 0) {
			if (e.key === "Enter" && e.target.value.trim().length > 1) {
				runSearch(e.target.value.trim());
			}
			return;
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setFocusIdx((prev) => Math.min(flatResults.length - 1, prev + 1));
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setFocusIdx((prev) => Math.max(0, prev - 1));
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (focusIdx >= 0 && flatResults[focusIdx]) {
				handleResultClick(flatResults[focusIdx]);
			} else if (flatResults.length > 0) {
				handleResultClick(flatResults[0]);
			}
		} else if (e.key === "Escape") {
			setResults([]);
			setFocusIdx(-1);
		}
	};

	// Scroll focused item into view
	useEffect(() => {
		if (focusIdx >= 0 && resultsRef.current) {
			const focused = resultsRef.current.querySelector(".sx-focus");
			if (focused) focused.scrollIntoView({ block: "nearest" });
		}
	}, [focusIdx]);

	// Build grouped results for rendering
	const groupedResults = React.useMemo(() => {
		if (!results.length) return [];
		const groups = {};
		results.forEach((r) => {
			const k = categoryOf(r.entry.url).key;
			(groups[k] || (groups[k] = [])).push(r);
		});
		const groupKeys = Object.keys(groups).sort((a, b) => {
			const diff = groups[b][0].score - groups[a][0].score;
			if (diff !== 0) return diff;
			return GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b);
		});
		return groupKeys.map((k) => ({
			key: k,
			label: GROUP_LABELS[k],
			items: groups[k],
		}));
	}, [results]);

	// Track flat index for focus
	let flatIndex = -1;
	const tokens = query ? tokenize(query) : [];

	return (
		<div className="search-container">
			<div className="search-input-wrapper">
				<input
					className="light-font"
					type="text"
					placeholder="Search for guides, tools, case studies, or FAQs..."
					value={query}
					onChange={handleSearch}
					onKeyDown={handleKeyDown}
				/>
				{query && (
					<button className="search-clear-btn" onClick={clearSearch}>
						&times;
					</button>
				)}
				<button className="search-btn">
					<span className="icon-search">&#xe90f;</span>
				</button>
			</div>

			{results.length > 0 && (
				<div className="sx-panel" ref={resultsRef}>
					<div className="sx-list">
						{groupedResults.map((group) => (
							<div className="sx-section" key={group.key}>
								<div className="sx-section-head">{group.label}</div>
								{group.items.map((r) => {
									flatIndex++;
									const idx = flatIndex;
									const cat = categoryOf(r.entry.url);
									const title = titleFor(r.entry);
									const breadcrumb = crumbFor(r.entry);
									return (
										<div
											key={r.entry.url + "-" + idx}
											className={`sx-item${idx === focusIdx ? " sx-focus" : ""}`}
											onClick={() => handleResultClick(r)}
											onMouseEnter={() => setFocusIdx(idx)}
										>
											<span className={`sx-badge sx-badge-${cat.key}`}>
												{cat.label}
											</span>
											<div className="sx-item-text">
												<div
													className="sx-item-title"
													dangerouslySetInnerHTML={{
														__html: highlightTokens(title, tokens),
													}}
												/>
												{breadcrumb && (
													<div
														className="sx-item-crumb"
														dangerouslySetInnerHTML={{
															__html: highlightTokens(breadcrumb, tokens),
														}}
													/>
												)}
											</div>
										</div>
									);
								})}
							</div>
						))}
					</div>
				</div>
			)}

			{showEmpty && query && (
				<div className="sx-panel">
					<div className="sx-empty">No matches for "{query}"</div>
				</div>
			)}
		</div>
	);
}
