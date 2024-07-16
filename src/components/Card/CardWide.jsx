import React from 'react';
import classes from "./Card.module.css"
import CardDesc from "../ui/CardDesc/CardDesc";

const CardWide = ({item}) => {
    return (
        <div className={classes.product}>
            <img src={item.image} alt="img" className={classes.category__itemImage}/>
            <div className={classes.category__itemDesc}>
                <CardDesc
                    title={item.title}
                    price={item.price}
                />
                <button className={classes.btn__view}>Viewer</button>
            </div>
        </div>
    );
};

export default CardWide;