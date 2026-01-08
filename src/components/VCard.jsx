import React from 'react';
import './VCard.css';
export default function VCard({ image, title, buttonText, children, link, buttonText2, link2,imageStyle    }) {
	return (
		<div className='VCard'>
			<img className='VCardImg' src={image} alt={title} style={imageStyle} />
			<div className="vCardBody">
				<div className="v-title">{title}</div>
				{children}
			</div>
			<div className="VCard-footer">
				<div className='v-btn-cnt'>
					<strong>{buttonText}</strong>
					<a href={link} target="_blank" className="VCard-btn "><span className='icon-arrow'>&#xe900;</span></a>
				</div>
				{buttonText2 && (
					<div className='v-btn-cnt'>
						<strong>{buttonText2}</strong>
						<a href={link2} target="_blank" className="VCard-btn "><span className='icon-arrow'>&#xe900;</span></a>
					</div>
				)}
			</div>
		</div>
	);
}
