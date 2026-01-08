import React, { useEffect, useRef, useState } from 'react';
import './HeaderCarousal.css';

export default function HeaderCarousal({ slidesData }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef(null);
	const indexRef = useRef(0);
	const resetTimeoutRef = useRef(null);
	const totalSlides = slidesData.length;
	const TRANSITION_MS = 1000;

	/*useEffect(() => { // IF AUTO ROTATE IS REQUIRED
		const interval = setInterval(() => {
			const slider = sliderRef.current;
			if (!slider) return;

			const nextIndex = indexRef.current + 1;
			slider.style.transition = `transform ${TRANSITION_MS}ms ease-in-out`;
			slider.style.transform = `translateX(-${(100 / (totalSlides + 1)) * nextIndex}%)`;

			indexRef.current = nextIndex;
			setCurrentIndex(nextIndex);

			if (nextIndex === totalSlides) {
				if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
				resetTimeoutRef.current = setTimeout(() => {
					if (!sliderRef.current) return;
					sliderRef.current.style.transition = 'none';
					sliderRef.current.style.transform = `translateX(0%)`;
					indexRef.current = 0;
					setCurrentIndex(0);
				}, TRANSITION_MS);
			}
		}, 5000);

		return () => {
			clearInterval(interval);
			if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
		};
	}, [totalSlides]);*/


	const goToSlide = (newIndex) => {
		if (newIndex >= 0 && newIndex < totalSlides) {
			setCurrentIndex(newIndex);
		}
	};
	return (
		<div className="slideshow-container">
			<div className="slider-wrapper-cnt">
				<div
					ref={sliderRef}
					className="slider-wrapper"
					style={{
						display: "flex",
						width: `${(totalSlides + 1) * 100}%`,
						transform: `translateX(-${(100 / (totalSlides + 1)) * currentIndex}%)`
					}}
				>
					{slidesData.map((slide, i) => (
						<div className="Header4" key={i}>
							<div className="Header4-bg" style={{ backgroundImage: `url(${slide.img})` }}>

								<h1 className="header-title mob-title">{slide.title}</h1>
								<div className="header-overlay"></div>
							</div>

							<div className="container">
								<div className="header4-nav-spacer"></div>
								<h1 className="header-title desk-title">{slide.title}</h1>
								<div className="footer">{slide.description}</div>
								<div className="footer">{slide.description1}</div>
							</div>
						</div>
					))}

				</div>
			</div>
			<div className="header-carousel-footer">
				<button
					className={`header-carousel-btn icon-back ${currentIndex === 0 ? 'disabled' : ''}`}
					onClick={() => goToSlide(currentIndex - 1)}
					disabled={currentIndex === 0}
				>
					&#xe90e;
				</button>
				<div className="header-carousel-dots">
					{slidesData.map((_, i) => (
						<span
							key={i}
							className={`dot ${i === currentIndex ? 'active' : ''}`}
							onClick={() => goToSlide(i)}
						/>
					))}
				</div>
				<button
					className={`header-carousel-btn icon-next ${(currentIndex === slidesData.length - 1 || slidesData.length == 0) ? 'disabled' : ''}`}
					onClick={() => goToSlide(currentIndex + 1)}
					disabled={currentIndex === slidesData.length - 1 || slidesData.length == 0}
				>
					&#xe90d;
				</button>
			</div>
		</div>
	);
}
