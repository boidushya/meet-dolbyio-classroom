// library
import React from 'react';
// internal
// components

export default function SwapIcon({ width, height, fill, additionalStyles }) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    ...additionalStyles,
  };
  return (
    <svg
      fill="white"
	  viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className="swap-icon"
    >
		<path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path>
    </svg>
  );
}