import React, {useState} from 'react';
import Title from "../ui/Title/Title";
import {Rating} from "@mui/material";
import avatar from "../../assets/Reviews/avatar.png";
import Review from "../Review/Review";

const PromptReviews = () => {
    const [totalReviews, setTotalReviews] = useState({count: 100, rate: "4.0"});
    const [review, setReview] = useState([
        {id: 1, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
        {id: 2, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
        {id: 3, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
        {id: 4, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
        {id: 5, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
    ])
    const rate = parseInt(totalReviews.rate, 10);

    return (
        <div className="prompt__reviews">
            <div className="reviews__header">
                <Title>{totalReviews.count} creator reviews</Title>
                <div className="prompt__info-rate">
                    <h1>{totalReviews.rate}</h1>
                    <Rating name="half-rating-read" defaultValue={rate} precision={0.1} readOnly
                            style={{color: 'rgb(237, 67, 220)', fontSize: 22}}/>
                </div>
            </div>
            <div className="reviews__list">
                {review.map(item =>
                    <Review review={item} key={item.id}/>
                )}
            </div>
        </div>
    );
};

export default PromptReviews;