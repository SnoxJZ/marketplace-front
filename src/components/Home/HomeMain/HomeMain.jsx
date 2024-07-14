import React from 'react';
import './HomeMain.css'
import robotImg from '../../../assets/Home/robot.png';
import elemLeft from '../../../assets/Home/elem-left.png';
import elemRight from '../../../assets/Home/elem-right.png';

const HomeMain = () => {
    return (
        <div className="home__main">
            <div className="home__main-title">NAME</div>
            <img src={robotImg} alt="robot" className="home__main-robot"/>
            <span className="home__elipse purple"></span>
            <img src={elemLeft} alt="" className="left-elem lines"/>
            <span className="home__elipse orange"></span>
            <img src={elemRight} alt="" className="right-elem lines"/>
        </div>
    );
};

export default HomeMain;