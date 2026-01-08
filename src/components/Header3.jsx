import React from 'react';
import './Header3.css';
export default function Header3({ img, title, children }) {
	return (
		<div className="Header3" >
			<div className="header3-bg" style={{ backgroundImage: `url(${img})` }} >
				<h1 className='header-title mob-title'>{title}</h1>
				<div className="header-overlay"> </div>

			</div>

			<div className='container '>
				<h1 className='header-title desk-title'>{title}</h1>
				<div className="footer">
					{children}
				</div>
			</div>
		</div>
	);
}
