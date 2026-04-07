import React from 'react';

export default function NumSteps({ num, children, id }) {
	return (
		<div className="num-step" id={id}>
			<div className="num-step-number">{num}</div>
			<div className="num-step-title">{children}</div>
		</div>
	);
}
