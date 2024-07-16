import React from 'react';
import classes from './Card.module.css'
import CardDesc from "../ui/CardDesc/CardDesc";

const Card = ({card}) => {


    return (
        <div className={classes.product}>
            <img src={card.image} alt="" className={classes.product__image}/>
            <div className={classes.product__desc}>
                <CardDesc
                    title={card.title}
                    price={card.price}
                />
            </div>
        </div>
    );
};

export default Card;