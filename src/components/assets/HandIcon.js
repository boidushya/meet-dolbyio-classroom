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
	  <path fill={fill} d="M20.5 5A1.5 1.5 0 0 0 19 6.5V11h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V11h-1V5.5a1.5 1.5 0 0 0-3 0v10.81l-2.22-3.6a1.5 1.5 0 0 0-2.56 1.58l3.31 5.34A5 5 0 0 0 9.78 22H17a5 5 0 0 0 5-5V6.5A1.5 1.5 0 0 0 20.5 5z"></path>
    </svg>
  );
}

//
