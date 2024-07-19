import React from 'react';
import Title from "../../ui/Title/Title";
import saves from "../../../assets/PromptInfo/heart-light.png";
import views from "../../../assets/PromptInfo/eye-line.png";

const PromptInfoStat = ({product}) => {
    return (
        <div className="prompt__info-stat">
            <Title fontSize="24px" color='rgb(237, 67, 220)'>{product.details.type}</Title>
            <p>{product.details.model}</p>
            <div className="prompt__stat">
                <Title fontSize="24px">{product.details.count} examples</Title>
                <div className="prompt__stat-saves">
                    <Title color='rgb(237, 67, 220)'>{product.details.saves}</Title>
                    <img src={saves} alt="heart"/>
                </div>
                <div className="prompt__stat-views">
                    <Title color='rgb(237, 67, 220)'>{product.details.views}</Title>
                    <img src={views} alt="eye"/>
                </div>
            </div>
        </div>
    );
};

export default PromptInfoStat;