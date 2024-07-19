import React from 'react';
import "../PromptInfo/PromptInfo.css"
import classes from "./Review.module.css"

const Review = ({review}) => {

    return (
        <div className={classes.review}>
            <div className="review__head">
                <div className={classes.review__user}>
                    <img src={review.avatar} alt="avatar"/>
                    <p>{review.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;