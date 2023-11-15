import React from "react";

const Button = ({ styles }) => {
    return (
        <button
            type="button"
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] leading-[27px] rounded-[10px] text-primary outline-none ${styles}`}
        >
            Get Started
        </button>
    );
};

export default Button;
