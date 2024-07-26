import React from 'react';
import Title from "../../ui/Title/Title";
import saves from "../../../assets/PromptInfo/heart-light.png";
import views from "../../../assets/PromptInfo/eye-line.png";
import {useMediaQuery} from "rsuite";
import {Rating} from "@mui/material";

const PromptInfoStat = ({product}) => {

    const rate = parseInt(product.details.rate, 10);
    const [isTablet] = useMediaQuery('(max-width: 896px)');

    return (
        <div className="prompt__info-stat_wrapper">
            <div className="prompt__info-stat_rate">
                <div className="prompt__info-rate mob">
                    <h1>{product.details.rate}</h1>
                    <Rating name="half-rating-read" defaultValue={rate} precision={0.1} readOnly
                            style={{color: 'rgb(237, 67, 220)', fontSize: 22}}/>
                </div>
                <Title fontSize="24px">{product.details.count} examples</Title>
            </div>
            <div className="prompt__info-stat">
                <Title fontSize={isTablet ? "20px" : "24px"} color='rgb(237, 67, 220)'>{product.details.type}</Title>
                <p>{product.details.model}</p>
                <div className="prompt__stat">
                    <Title fontSize="24px" id="product__count">{product.details.count} examples</Title>
                    <div className="prompt__stat-elem">
                        <Title color='rgb(237, 67, 220)'
                               fontSize={isTablet ? "32px" : "36px"}>{product.details.saves}</Title>
                        <img src={saves} alt="heart"/>
                    </div>
                    <div className="prompt__stat-elem">
                        <Title color='rgb(237, 67, 220)'
                               fontSize={isTablet ? "32px" : "36px"}>{product.details.views}</Title>
                        <img src={views} alt="eye"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromptInfoStat;