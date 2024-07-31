import React from 'react';
import "../PromptInfo/PromptInfo.css"
import classes from "./Review.module.css"
import {Rating} from "@mui/material";
import {useMediaQuery} from "rsuite";
import defaultAva from "../../assets/Header/avatar-default.png"
import {useNavigate} from "react-router-dom";

const Review = ({review}) => {
    const [isTablet] = useMediaQuery('(max-width: 896px)');
    const router = useNavigate();


    return (
        <div className={classes.review}>
            <div className={classes.review__head}>
                <div className={classes.review__user} onClick={() => router(`/profile/${review.nickname}`)}>
                    <img src={defaultAva} alt="avatar"/>
                    <p>{review.nickname}</p>
                </div>
                <p>{review.date_of_purchase}</p>
            </div>
            <div className={classes.review__rate}>
                <h1>{review.rating}</h1>
                <Rating name="half-rating-read" defaultValue={review.rating} precision={0.1} readOnly
                        style={{color: 'rgb(237, 67, 220)', fontSize: isTablet ? 14 : 22}}/>
            </div>
            <p className={classes.review__text}>{review.text}</p>
        </div>
    );
};

export default Review;