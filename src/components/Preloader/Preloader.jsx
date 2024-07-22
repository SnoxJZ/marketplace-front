import React from 'react';
import "./Preloader.css"

const Preloader = () => {
    return (
        <div className="preloader__wrapper">
            <div className="preloader">
                <h1 className="preloading__text">Loading</h1>
                <div className="load__bar">
                    <span className="load__rect load__first-elem"></span>
                    <span className="load__rect load__second-elem"></span>
                    <span className="load__rect load__first-elem"></span>
                    <span className="load__rect load__second-elem"></span>
                    <span className="load__rect load__first-elem"></span>
                    <span className="load__rect load__second-elem"></span>
                    <span className="load__rect load__first-elem"></span>
                    <span className="load__rect load__second-elem"></span>
                    <span className="load__rect load__first-elem"></span>
                    <span className="load__rect load__second-elem"></span>
                    <span className="load__line"></span>
                    <h1 className="load__perc">0%</h1>
                </div>
            </div>
        </div>
    );
};

export default Preloader;