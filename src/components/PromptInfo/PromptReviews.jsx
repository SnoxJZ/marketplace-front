import React, {useState} from 'react';
import Title from "../ui/Title/Title";
import {Rating} from "@mui/material";
import avatar from "../../assets/Reviews/avatar.png";
import Review from "../Review/Review";

const PromptReviews = () => {
    const [totalReviews, setTotalReviews] = useState({count: 100, rate: 4.0});
    const [review, setReview] = useState([
        {id: 1, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: 4.0, text: "Very good"},
        {id: 2, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: 4.0, text: "Very good"},
        {id: 3, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: 4.0, text: "Very good"},
        {id: 4, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: 4.0, text: "Very good"},
        {id: 5, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: 4.0, text: "Very good"},
    ])

    return (
        <div className="prompt__reviews">
            <div className="reviews__header">
                <Title>{totalReviews.count} creator reviews</Title>
                <div className="prompt__info-rate">
                    <p>{totalReviews.rate}</p>
                    <Rating name="half-rating-read" defaultValue={totalReviews.rate} precision={0.1} readOnly
                            style={{color: 'rgb(237, 67, 220)', fontSize: 22}}/>
                </div>
            </div>
            {review.map(item =>
                <Review review={review}/>
            )}
        </div>
    );
};

export default PromptReviews;