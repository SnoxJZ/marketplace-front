import React from 'react';
import HomeMain from "../components/Home/HomeMain/HomeMain";
import HomeCategory from "../components/Home/HomeCategory/HomeCategory";
import HomeMarketplace from "../components/Home/HomeMarketplace/HomeMarketplace";
import HomePrompts from "../components/Home/HomePrompts/HomePrompts";

const Home = () => {
    return (
        <div className="Home">
            <div className="home__main-content">
                <HomeMain/>
            </div>
            <HomeCategory/>
            <HomeMarketplace/>
            <HomePrompts/>
        </div>
    );
};

export default Home;