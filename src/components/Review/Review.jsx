import React from 'react';
import "../PromptInfo/PromptInfo.css"
import classes from "./Review.module.css"
import {Rating} from "@mui/material";
import {useMediaQuery} from "rsuite";

const Review = ({review}) => {
    const rate = parseInt(review.rate, 10);
    const [isTablet] = useMediaQuery('(max-width: 896px)');

    return (
        <div className={classes.review}>
            <div className={classes.review__head}>
                <div className={classes.review__user}>
                    <img src={review.avatar} alt="avatar"/>
                    <p>{review.name}</p>
                </div>
                <p>{review.date}</p>
            </div>
            <div className={classes.review__rate}>
                <h1>{review.rate}</h1>
                <Rating name="half-rating-read" defaultValue={rate} precision={0.1} readOnly
                        style={{color: 'rgb(237, 67, 220)', fontSize: isTablet ? 14 : 22}}/>
            </div>
            <p className={classes.review__text}>{review.text}</p>
        </div>
    );
};

export default Review;