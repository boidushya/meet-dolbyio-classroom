// library
import React from 'react';
// internal
// components

export default function HandIcon({
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
			<path fill={fill} d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
			<path fill={"#ccc"} d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path>
		</svg>
	);
}

//
