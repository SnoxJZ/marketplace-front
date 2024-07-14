import React from 'react';
import './HomeMain.css'
import robotImg from '../../../assets/Home/robot.png';
import elemLeft from '../../../assets/Home/elem-left.png';
import elemRight from '../../../assets/Home/elem-right.png';
import Title from "../../ui/Title/Title";

const HomeMain = () => {
    return (
        <div className="home__main">
            <div className="home__main-title">NAME</div>
            <img src={robotImg} alt="robot" className="home__main-robot"/>
            <span className="home__elipse purple"></span>
            <img src={elemLeft} alt="" className="left-elem"/>
            <span className="home__elipse orange"></span>
            <img src={elemRight} alt="" className="right-elem"/>
            <span className="home__rectangle right-rect"></span>
            <span className="home__rectangle left-rect"></span>
            <div className="home__main-desc">
                <Title fontSize="32px">AI Prompt Marketplace</Title>
                <p>Explore 130,000+ curated AI prompts made by expert AI creators</p>
                <div className="home__main-more">
                    <p>More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="8" viewBox="0 0 46 8" fill="none">
                        <path
                            d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z"
                            fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;