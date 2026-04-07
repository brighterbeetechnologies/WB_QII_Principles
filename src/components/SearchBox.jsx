import React, { useEffect, useState } from "react";
import "./SearchBox.css"; // styles
import { useNavigate } from "react-router-dom";
import { data } from "../assets/search-index.js" 

export default function SearchBox() {
  const [query, setQuery] = useState("");
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

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = data.filter((item) =>
      item.content.toLowerCase().includes(value.toLowerCase()) || item.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  // console.log("Search results:", results);

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
          {results.map((item) => (
            <div className="search-item" onClick={()=> navigate(item.url)} key={item.id}>
              <span className="icon-arrow">&#xe916;</span> {item.title}
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
