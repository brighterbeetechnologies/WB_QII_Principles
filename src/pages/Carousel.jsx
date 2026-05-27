import React, { useState } from "react";
import "./ResourceLibrary.css";

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);

  const goToSlide = (i) => {
    if (i < 0 || i >= slides.length) return;
    setIndex(i);
  };   

  return (
    <div className="resource-carousel-container">
      <div className="resource-carousel-wrapper">
        <div
          className="resource-carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="resource-carousel-slide" key={i}>
              <div className="resource-card-container">
                {slide}
              </div>
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <div className="resource-carousel-footer">
            <button
              className={`resource-carousel-btn icon-back ${
                index === 0 ? "disabled" : ""
              }`}
              onClick={() => goToSlide(index - 1)}
              disabled={index === 0}
            >
              &#xe90e;
            </button>

            <div className="resource-carousel-dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>

            <button
              className={`resource-carousel-btn icon-next ${
                index === slides.length - 1 ? "disabled" : ""
              }`}
              onClick={() => goToSlide(index + 1)}
              disabled={index === slides.length - 1}
            >
              &#xe90d;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
