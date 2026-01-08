import React from 'react';

export default function NumSteps({ num, children }) {
	return (
		<div className="num-step">
			<div className="num-step-number">{num}</div>
			<div className="num-step-title">{children}</div>
		</div>
	);
}
