import React from "react";

const Button = ({ children, inverted = false, ...otherProps }) => {
	return (
		<button
			className={`${inverted ? "bg-white text-darkPurple hover:bg-darkPurple hover:text-white" : " bg-darkPurple text-white hover:bg-white hover:text-darkPurple outline outline-1 hover:outline-darkPurple"
				} disabled:bg-gray-400  py-1 px-3 lg:py-2 lg:px-5 rounded text-sm lg:text-base first-letter:capitalize font-medium transition-colors`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
