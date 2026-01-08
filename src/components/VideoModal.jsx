import React, { useEffect, useRef, useState } from 'react';
import './VideoModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo, isVideo, setShowVideo } from '../slices/appDataSlice';
export default function VideoModal() {

	const showVideo = useSelector(isVideo);
	const videoData = useSelector(getVideo);
	const dispatch = useDispatch();
	const videoRef = useRef(null);
	const containerRef = useRef(null);
	const handleContentClick = (e) => {
		e.stopPropagation();
	};
	const paddingBoth = 30;
	const maxWidth = 840 - paddingBoth;
	const maxHeight = 470 - paddingBoth - 20;

	const [size, setSize] = useState({ width: videoData.width, height: videoData.height });
	const closeVideo = () => {
		dispatch(setShowVideo(false));
	};

	useEffect(() => {
		function handleResize() {
			if (!videoData.width || !videoData.height) return;

			const availableWidth = Math.min(maxWidth, window.innerWidth - paddingBoth);
			const availableHeight = Math.min(maxHeight, window.innerHeight - paddingBoth);

			const widthRatio = availableWidth / videoData.width;
			const heightRatio = availableHeight / videoData.height;

			const scale = Math.min(widthRatio, heightRatio, 1);

			const newWidth = Math.round(videoData.width * scale);
			const newHeight = Math.round(videoData.height * scale);
			setSize({ width: newWidth, height: newHeight });
		}

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);

	}, [videoData.width, videoData.height]);



	if (!showVideo) {
		return null;
	}
	return (
		<div className="modal-overlay" onClick={() => { closeVideo(); }}>
			<div className="modal-content" onClick={handleContentClick} ref={containerRef}>
				<div className="modal-header">
					<p className="modal-title"><strong>{videoData.title}</strong></p>
					<button
						className="modal-close-button"
						onClick={() => { closeVideo(); }}
						aria-label="Close video modal"
					>
						&times;
					</button>
				</div>
				<div className="video-container">
					<video ref={videoRef}
						style={{
							width: size.width + "px",
							height: size.height + "px",

						}}
						controlsList="nodownload"
						className="video-frame"
						key={videoData.url}
						controls
						autoPlay
						title={videoData.title}
					>
						<source src={videoData.url} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>
	);
}
