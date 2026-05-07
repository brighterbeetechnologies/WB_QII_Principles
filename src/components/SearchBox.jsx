import React, { useEffect, useRef, useState } from "react";
import "./SearchBox.css"; // styles
import { useNavigate } from "react-router-dom";
import { data } from "../assets/search-index.js";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const timerRef = useRef(null);
  //   const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     fetch("/search-index.json")
  //       .then((r) => r.json())
  //       .then((myData) => {
  //         setData(myData);
  //       });
  // 	}, []);
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      // Clear previous timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        if (value.trim() === "") {
          setResults([]);
          return;
        }
        const filtered = data.filter((item) =>
          item.content.toLowerCase().includes(value.toLowerCase()),
        );
        setResults(filtered);
        console.log("Search results:", filtered);
      }, 500);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          className="light-font "
          type="text"
          placeholder="Search for guides, tools, case studies, or FAQs..."
          value={query}
          onChange={handleSearch}
        />
        <button className="search-btn">
          <span className="icon-search">&#xe90f;</span>
        </button>
      </div>

      {results.length > 0 && (
        <div className="search-results">
          {results.map((item) => {
            let searchedString = item.content;
            const context = 15;
            const text = item.content;
            const searchText = query;
            const lowerText = text.toLowerCase();
            const lowerSearch = searchText.toLowerCase();
            const matchIndex = lowerText.indexOf(lowerSearch);
            if (matchIndex === -1) {
              return null; // not found
            }

            const matchLength = searchText.length;
            let start = matchIndex - context;
            let end = matchIndex + matchLength + context;

            // If start goes below 0, shift extra chars to the right
            if (start < 0) {
              const shortage = Math.abs(start);
              start = 0;
              end = Math.min(text.length, end + shortage);
            }

            // If end goes beyond text length, shift extra chars to the left
            if (end > text.length) {
              const shortage = end - text.length;
              end = text.length;
              start = Math.max(0, start - shortage);
            }

            const before = text.slice(start, matchIndex);
            const match = text.slice(matchIndex, matchIndex + matchLength);
            const after = text.slice(matchIndex + matchLength, end);

            return (
              <div
                className="search-item"
                onClick={() => {
                  navigate(item.url, {
                    state: {
                      scrollTo: item.secId,
                    },
                  });
                }}
                key={item.secid}
              >
                <div className="search-data">
                  <div className="search-text">
                    {start > 0 && "..."}
                    {before}
                    <b>{match}</b>
                    {after}
                    {end < text.length && "..."}
                  </div>
                  {item.qii && (
                    <>
                      <div className="search-location">
                        <img src="images/location.png" alt="" />
                        {item.qii.split(" ")[0]}{" "}
                        {item.ip && (
                          <>
                            <img
                              src="images/right-arrow.png"
                              alt=""
                              style={{
                                width: "10px",
                                opacity: "0.4",
                                height: "10px",
                              }}
                            />
                            {item.ip}
                          </>
                        )}
                      </div>
                    </>
                  )}{" "}
                </div>
                <span className="icon-arrow">&#xe916;</span>{" "}
                {/* {item.title} */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
