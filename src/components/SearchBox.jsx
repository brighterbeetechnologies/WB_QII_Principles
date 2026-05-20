import React, { useEffect, useRef, useState } from "react";
import "./SearchBox.css"; // styles
import { useNavigate, useLocation } from "react-router-dom";
import { data } from "../assets/search-index.js";

function removeHighlights() {
	document.querySelectorAll("mark.search-highlight").forEach((mark) => {
		const parent = mark.parentNode;
		parent.replaceChild(document.createTextNode(mark.textContent), mark);
		parent.normalize();
	});
}

export default function SearchBox() {
	const [query, setQuery] = useState("");
	const timerRef = useRef(null);
	const [results, setResults] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();
	const searchPageRef = useRef(null);

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

	const handleSearch = (e) => {
		const value = e.target.value;
		checkString(value);
	};
	const checkString = (value) => {
		setQuery(value);
		if (!value) {
			setResults([]);
			return;
		}
		if (value.length > 2) {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
			timerRef.current = setTimeout(() => {
				if (value.trim() === "") {
					setResults([]);
					return;
				}
				const searchTerm = value.toLowerCase();
				const matches = [];

				data.forEach((page) => {
					const content = page.content.toLowerCase();
					let count = 0;
					let pos = 0;
					while ((pos = content.indexOf(searchTerm, pos)) !== -1) {
						count++;
						pos += searchTerm.length;
					}
					if (count > 0) {
						matches.push({
							url: page.url,
							path: page.path,
							count,
						});
					}
				});

				// Sort by occurrence count: highest first
				matches.sort((a, b) => b.count - a.count);
				setResults(matches);
			}, 500);
		} else {
			setResults([]);
		}
	};
	const clearSearch = () => {
		setQuery("");
		setResults([]);
		removeHighlights();
		window.dispatchEvent(new CustomEvent("clearSearchHighlight"));
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && e.target.value.trim().length > 1) {
			checkString(e.target.value.trim());
		}
	};

	const handleResultClick = (item) => {
		searchPageRef.current = item.url;
		navigate(item.url, {
			state: {
				highlightText: query,
			},
		});
		setResults([]);
	};

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
				<div className="search-results">
					{results.map((item) => (
						<div
							className="search-item"
							onClick={() => handleResultClick(item)}
							key={item.url}
						>
							<div className="search-data">
								<span className="search-count">
									<b>{item.count}</b> {item.count === 1 ? "instance" : "instances"}
								</span>
								<span className="search-path">
									{item.path}
								</span>
							</div>
							<span className="icon-arrow">&#xe916;</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
