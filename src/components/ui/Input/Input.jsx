import React from 'react';
import classes from './Input.module.css'

const Input = ({ ...props }) => {
    return (
        <input {...props} className={classes.inputField}/>
    );
};

export default Input;