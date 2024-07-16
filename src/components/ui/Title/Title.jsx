import React from 'react';
import classes from "./Title.module.css"

const Title = ({ fontSize, color, children, ...props }) => {
    const style = {
        fontSize: fontSize,
        color: color
    };

    return (
        <h1 {...props} className={classes.titleText} style={style}>
            {children}
        </h1>
    );
};

export default Title;