import React, {useState} from 'react';
import Title from "../ui/Title/Title";
import Rating from "@mui/material/Rating";
import Button from "../ui/Button/Button";
import {Input} from "antd";
import "./PromptInfo.css"

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

const PromptAddReview = () => {
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    return (
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
                    autoSize={{minRows: 1, maxRows: 5}}
                    placeholder="Type your review"
                />
                <div className="send__review">
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default PromptAddReview;