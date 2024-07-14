import React from 'react';
import classes from './Card.module.css'

const Card = ({card}) => {
    return (
        <div className={classes.product}>
            <img src={card.image} alt="" className={classes.product__image}/>
            <div className="product__details">
                <h1 className="product__title">{card.title}</h1>
                <h1 className="product__price">{card.price}</h1>
            </div>
        </div>
    );
};

export default Card;