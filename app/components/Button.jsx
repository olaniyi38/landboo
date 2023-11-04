import React from "react";

const Button = ({ children, inverted = false }) => {
	return (
		<button
			className={`${
				inverted ? "bg-white text-darkPurple" : " bg-darkPurple text-white"
			}  py-1 px-3 lg:py-2 lg:px-5 rounded text-sm lg:text-base first-letter:capitalize font-medium`}
		>
			{children}
		</button>
	);
};

export default Button;
