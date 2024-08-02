import React, { forwardRef } from 'react';
import classes from './Card.module.css';
import CardDesc from "../ui/CardDesc/CardDesc";
import { useNavigate } from "react-router-dom";

const Card = forwardRef(({ card }, ref) => {
    const router = useNavigate();

    return (
        <div ref={ref} className={classes.product} onClick={() => router(`/products/item/${card.id}`)}>
            <img src={card.image_url} alt="" className={classes.product__image} />
            <div className={classes.product__desc}>
                <CardDesc
                    title={card.title}
                    price={card.price}
                />
            </div>
        </div>
    );
});

export default Card;
