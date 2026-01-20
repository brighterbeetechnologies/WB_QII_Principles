import React, { useState, useEffect } from 'react';
import './TextIconCarousal.css';
export default function TextIconCarousal({ data }) {
	const [current, setCurrent] = useState(0);
	const [startX, setStartX] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % data.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [data.length]);

	const handleTouchStart = (e) => {
		setStartX(e.touches[0].clientX);
	};
	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % data.length);
	};
	const totalSlides = data.length;
	const TRANSITION_MS = 1000;
	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + data.length) % data.length);
	};
	const handleTouchEnd = (e) => {
		const endX = e.changedTouches[0].clientX;
		if (startX - endX > 50) { nextSlide(); }
		if (endX - startX > 50) { prevSlide(); }
	};
	return (
		<div className='text-icon-carousal' onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}>
			<div className="text-icon-carousal-cnt"
				style={{
					display: "flex",
					width: `${(totalSlides) * 100}%`,
					transform: `translateX(-${(100 / (totalSlides)) * current}%)`
				}}

			>
				{data.map((slide, i) => (
					<div className="carousel-card" key={i}>
						<div className="icon-carousel" dangerouslySetInnerHTML={{ __html: slide.icon }} ></div>
						<label className="label-carousel">{slide.text}</label>
					</div>
				))}
			</div>
			<div className="carousel-dots">
				{data.map((_, i) => (
					<span
						key={i}
						className={`carousel-dot ${i === current ? "active" : ""}`}
						onClick={() => setCurrent(i)}
					></span>
				))}
			</div>
		</div>
	);
}
