import React from 'react';
import './HomeMain.css'
import robotImg from '../../../assets/Home/robot.png';

const HomeMain = () => {
    return (
        <div className="home__main">
            <div className="home__main-title">NAME</div>
            <img src={robotImg} alt="robot" className="home__main-robot" />
        </div>
    );
};

export default HomeMain;