import React from "react";

const Button = ({ children, inverted = false }) => {
	return (
		<button
			className={`${
				inverted ? "bg-white text-darkPurple" : " bg-darkPurple text-white"
			}  py-1 px-3 rounded text-sm first-letter:capitalize font-medium`}
		>
			{children}
		</button>
	);
};

export default Button;
