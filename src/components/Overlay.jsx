import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isOverlay, setOverlay } from '../slices/appDataSlice';

export default function Overlay() {
	const showOverlay = useSelector(isOverlay);
	const dispatch = useDispatch();
	useEffect(() => {
		const body = document.body;
		const html = document.documentElement;
		const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
		if (showOverlay) {
			body.classList.add("no-scroll");
			html.classList.add("no-scroll");
			if (document.documentElement.clientWidth < 1010) {
				body.style.paddingRight = `${scrollBarWidth}px`;
			} else {
				body.style.paddingRight = "";
			}
		} else {
			body.classList.remove("no-scroll");
			html.classList.remove("no-scroll");
			body.style.paddingRight = "";
		}
		return () => {
			html.classList.remove("no-scroll");
			body.classList.remove("no-scroll");
			body.style.paddingRight = "";
		};
	}, [showOverlay]);

	if (showOverlay) {
		return (
			<div className='overlay' onClick={(e) => {
				dispatch(setOverlay(!showOverlay));
			}}></div>
		);
	}
	return (
		<></>
	);
}
