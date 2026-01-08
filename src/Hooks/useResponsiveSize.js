import { useState, useEffect } from 'react';

function useResponsiveSize() {
	const [scaleVal, setScaleVal] = useState(1);

	useEffect(() => {
		const calculateScale = () => {
			const originalWidth = 1280;
			const originalHeight = 720;
			const availableHeight = window.innerHeight;
			const availableWidth = window.innerWidth;
			const scaleH = availableHeight / originalHeight;
			const scaleW = availableWidth / originalWidth;
			let scale = Math.min(scaleH, scaleW);
			setScaleVal(scale);
		};
		calculateScale();
		window.addEventListener('resize', calculateScale);
		return () => window.removeEventListener('resize', calculateScale);
	}, []);
	return { scale: scaleVal };
}
export default useResponsiveSize;
