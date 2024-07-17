import React from 'react';
import classes from "./Button.module.css"

const Button = ({ borderColor, children, ...props }) => {
    const style = {
        borderColor: borderColor
    };

    return (
        <button {...props} className={classes.btn} style={style}>
            {children}
        </button>
    );
};

export default Button;