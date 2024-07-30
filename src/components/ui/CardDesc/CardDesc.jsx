import React from 'react';
import classes from "./CardDesc.module.css";

const CardDesc = ({title, price}) => {

    return (
        <div className={classes.product__details}>
            <h1 className={classes.product__title}>{title}</h1>
            <h1 className={classes.product__price}>ART {price}</h1>
        </div>
    );
};

export default CardDesc;