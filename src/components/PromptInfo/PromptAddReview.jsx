import React, {useState} from 'react';
import Title from "../ui/Title/Title";
import Rating from "@mui/material/Rating";
import Button from "../ui/Button/Button";
import {Input, message} from "antd";
import "./PromptInfo.css"
import {addReview} from "../../API/useParserService";

const { TextArea } = Input;

const PromptAddReview = ({profileId, productId, profileNickname}) => {
    const [value, setValue] = useState(0);
    const [text, setText] = useState('');

    const handleSendReview = async () => {
        if (!value || !text) {
            message.error("Please provide a rating and a review text.");
            return;
        }

        const reviewData = {
            user_id: profileId,
            product_id: productId,
            nickname: profileNickname,
            date_of_purchase: new Date().toISOString().split('T')[0],
            text,
            rating: value
        };

        try {
            await addReview(reviewData);
            message.success("Review added successfully!");
            setValue(0);
            setText('');
        } catch (error) {
            message.error("Failed to add review.");
        }
    };

    return (
        <div className="prompt__add-review_wrap">
            <div className="add_review-header">
                <Title>Leave your feedback</Title>
            </div>
            <form className="prompt__add-review" onSubmit={(e) => { e.preventDefault(); handleSendReview(); }}>
                <div className="set__rate">
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={1}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        style={{color: 'rgb(237, 67, 220)', fontSize: 32}}
                    />
                </div>
                <TextArea
                    rootClassName="review__textarea"
                    autoSize={{minRows: 1, maxRows: 5}}
                    placeholder="Type your review"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="send__review">
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default PromptAddReview;