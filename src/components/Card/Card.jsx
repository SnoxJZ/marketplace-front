import React from 'react';
import classes from './Card.module.css'
import CardDesc from "../ui/CardDesc/CardDesc";
import {useNavigate} from "react-router-dom";

const Card = ({card}) => {
    const router = useNavigate();

    return (
        <div className={classes.product} onClick={() => router(`/marketplace/item/${card.id}`)}>
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