import React from 'react';
import classes from "./Button.module.css"

const Button = ({ color, children, ...props }) => {
    const style = {
        color: color
    };

    return (
        <button {...props} className={classes.btn} style={style}>
            {children}
        </button>
    );
};

export default Button;