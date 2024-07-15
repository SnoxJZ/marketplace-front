import React from 'react';
import Button from "../../ui/Button/Button";
import "./HomeMarketplace.css"

const HomeMarketplace = () => {
    return (
        <div>
            <div className="home__marketplace">
                <div className="home__marketplace-desc">
                    <div className="marketplace__desc-text">
                        <h1 className="marketplace__desc-title">AI Prompt Marketplace</h1>
                        <p>Explore 130,000+ curated AI prompts made by expert AI creators Midjourney, ChatGPT, DALL·E, Stable Diffusion & more</p>
                    </div>
                    <div className="marketplace__desc-btns">
                        <Button>Catalog</Button>
                        <Button>Sell prompt</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMarketplace;