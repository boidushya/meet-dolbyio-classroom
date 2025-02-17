// library
import React from 'react';
// internal
// components

export default function ExitIcon({
	width,
	height,
	fill,
	additionalStyles,
	isHandDown,
}) {
	const style = {
		width: `${width}px`,
		height: `${height}px`,
		...additionalStyles,
	};
	const viewBox = `0 0 ${24} ${24}`;
	return (
		<svg style={style} viewBox={viewBox} className="hand-icon">
			<path fill={fill} d="M5.002 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-14c-1.103 0-2 .897-2 2v6.001H10V7l6 5-6 5v-3.999H3.002V19c0 1.103.897 2 2 2z"></path>
		</svg>
	);
}

//
