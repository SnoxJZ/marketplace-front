import React, { useState, useEffect } from 'react';
import "./Preloader.css";

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 15);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const timer = setTimeout(() => {
                setIsHidden(true);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [progress]);

    return (
        <div id="preloader" className={`preloader__wrapper ${isHidden ? 'preloader__hidden' : ''}`}>
            <div className="preloader">
                <h1 className="preloading__text">Loading</h1>
                <div className="load__bar">
                    <div className="load__bar-items">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <span
                                key={index}
                                className={`load__rect ${index % 2 === 0 ? 'load__first-elem' : 'load__second-elem'}`}
                                style={{
                                    background: progress >= (index + 1) * 10 ? 'linear-gradient(180deg, rgba(237,67,220,1) 0%, rgba(255,140,6,1) 100%)' : '#252525'
                                }}
                            ></span>
                        ))}
                    </div>
                    <span className="load__line"></span>
                    <h1 className="load__perc">{progress}%</h1>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
