import React from 'react';
import classes from "./Card.module.css";
import {Spin} from "antd";

const PlaceholderCardWide = () => {
    return (
        <div className={classes.placeholder__card_wide}>
            <Spin/>
        </div>
    );
};

export default PlaceholderCardWide;