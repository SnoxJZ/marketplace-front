import React, {useState} from 'react';
import Title from "../ui/Title/Title";
import Rating from '@mui/material/Rating';
import avatar from "../../assets/Reviews/avatar.png";
import Review from "../Review/Review";
import { Input } from 'antd';
import CompStyles from "../../providers/CompStyles";
import Button from "../ui/Button/Button";

const { TextArea } = Input;

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const PromptReviews = () => {
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
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
        <CompStyles>
        <div className="prompt__reviews-wrapper">
            <div className="prompt__reviews">
                <div className="reviews__header">
                    <Title>{totalReviews.count} creator reviews</Title>
                    <div className="prompt__info-rate full">
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
            <div className="prompt__add-review_wrap">
                <div className="add_review-header">
                    <Title>Leave your feedback</Title>
                </div>
                <form className="prompt__add-review">
                    <div className="set__rate">
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            style={{color: 'rgb(237, 67, 220)', fontSize: 32}}
                        />
                        {value !== null && (
                            <Title fontSize="32px"
                                   color="var(--main-text-color)">{labels[hover !== -1 ? hover : value]}</Title>
                        )}
                    </div>
                    <TextArea
                        rootClassName="review__textarea"
                        autoSize={{ minRows: 1, maxRows: 5 }}
                        placeholder="Type your review"
                    />
                    <div className="send__review">
                        <Button>Send</Button>

                    </div>
                </form>
            </div>
        </div>
        </CompStyles>
    );
};

export default PromptReviews;