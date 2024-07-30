import React, {useState} from 'react';
import Title from "../ui/Title/Title";
import Rating from '@mui/material/Rating';
import Review from "../Review/Review";
import CompStyles from "../../providers/CompStyles";
import PromptAddReview from "./PromptAddReview";

const PromptReviews = ({product}) => {
    const calculateReviewsStats = (reviews) => {
        const reviewsCount = reviews.length;
        const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviewsCount;

        return {
            reviewsCount,
            averageRating: parseFloat(averageRating.toFixed(1))
        };
    };
    const { reviewsCount, averageRating } = calculateReviewsStats(product.reviews);

    return (
        <CompStyles>
        <div className="prompt__reviews-wrapper">
            <div className="prompt__reviews">
                <div className="reviews__header">
                    <Title>{reviewsCount} creator reviews</Title>
                    <div className="prompt__info-rate full">
                        <h1>{averageRating}</h1>
                        <Rating name="half-rating-read" defaultValue={averageRating} precision={0.1} readOnly
                                style={{color: 'rgb(237, 67, 220)', fontSize: 22}}/>
                    </div>
                </div>
                <div className="reviews__list">
                    {product.reviews.map(item =>
                        <Review review={item} key={item.nickname}/>
                    )}
                </div>
            </div>
            <PromptAddReview/>
        </div>
        </CompStyles>
    );
};

export default PromptReviews;