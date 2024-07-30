import React from 'react';
import {Spin} from "antd";
import classes from "./Card.module.css"

const PlaceholderCard = () => {
    return (
        <div className={classes.placeholder__card}>
            <Spin/>
        </div>
    );
};

export default PlaceholderCard;