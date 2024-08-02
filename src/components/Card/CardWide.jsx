import React from 'react';
import classes from "./Card.module.css"
import CardDesc from "../ui/CardDesc/CardDesc";
import {useNavigate} from "react-router-dom";

const CardWide = ({item}) => {
    const router = useNavigate();

    return (
        <div className={classes.product} onClick={() => router(`/products/item/${item.id}`)}>
            <img src={item.image_url} alt="img" className={classes.category__itemImage}/>
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