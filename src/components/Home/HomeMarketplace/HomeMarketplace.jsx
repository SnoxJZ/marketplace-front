import React from 'react';
import Button from "../../ui/Button/Button";
import "./HomeMarketplace.css"
import {motion} from 'framer-motion';
import { homeMarketplace } from "../../../animation/AnimatedHome"
import {Link} from "react-router-dom";

const HomeMarketplace = () => {
    return (
        <motion.div
            className="home__marketplace"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 1, once: true }}
        >
            <motion.div variants={homeMarketplace} transition={{ duration: 2 }} className="home__marketplace-desc">
                <div className="marketplace__desc-text">
                    <h1 className="marketplace__desc-title">AI Prompt Products</h1>
                    <p>Explore 130,000+ curated AI prompts made by expert AI creators Midjourney, ChatGPT, DALL·E, Stable Diffusion & more</p>
                </div>
                <div className="marketplace__desc-btns">
                    <Link to="/products">
                        <Button>Catalog</Button>
                    </Link>
                    <Link to="/contacts">
                        <Button>Sell prompt</Button>
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HomeMarketplace;