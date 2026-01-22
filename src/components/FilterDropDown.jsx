import React, { useState, useRef, useEffect } from "react";
import "./FilterDropDown.css";
import { updatedFilter } from "../slices/appDataSlice";
import { useSelector } from "react-redux";

export default function FilterDropDown({ filterData, onChange, preSelected }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const dropdownRef = useRef(null);
  const updateddFilter = useSelector(updatedFilter);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (preSelected) {
      setSelected(preSelected);
      onChange(preSelected);
    }
  }, [preSelected]);

  const grouped = filterData.reduce((acc, item) => {
    const key = item.category || "General";
    if (item.show) {
      if (!acc[key]) acc[key] = [];

      acc[key].push(item);
    }
    return acc;
  }, {});

  const isSelected = (item) => {
    return selected.some((sel) => {
      return sel.id === item.id && sel.category === item.category;
    });
  };

  const toggleSelection = (item) => {
    const exists = isSelected(item);
    let updated;
    if (exists) {
      updated = selected.filter(
        (sel) => !(sel.id === item.id && sel.category === item.category),
      );
    } else {
      updated = [...selected, item];
    }
    setSelected(updated);
    onChange && onChange(updated);
  };

  return (
    <div className="filter-dropdown" ref={dropdownRef}>
      <button onClick={() => setOpen(!open)} className="filter-dropdown_toggle">
        {selected.length > 0 && (
          <div className="filter-count">{selected.length}</div>
        )}
        <span className="icon-filter">&#xe908;</span> Filter by
      </button>
      {selected.length > 0 && (
        <button
          onClick={() => {
            setSelected([]);
            onChange([]);
          }}
          className="filter-dropdown_toggle"
        >
          Clear filter
        </button>
      )}

      {open && (
        <div className="filter-dropdown_menu">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="category-cnt">
              {category !== "General" && (
                <div className="filter-dropdown_category">{category}</div>
              )}
              {items.map((item) => (
                <label
                  key={`${category}-${item.id}`}
                  className="filter-dropdown_item"
                >
                  <input
                    type="checkbox"
                    checked={isSelected(item)}
                    onChange={() => toggleSelection(item)}
                  />
                  {item.title}
                </label>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
