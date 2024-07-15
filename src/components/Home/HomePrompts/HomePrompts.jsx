import React, { useState } from 'react';
import Title from "../../ui/Title/Title";
import "./HomePrompts.css";
import samurai from "../../../assets/Home/samurai.png";
import PromptsList from "./PromptsList";

const HomePrompts = () => {
    const [prompts, setPrompts] = useState([
        {id: 1, image: samurai, title: "Samurai", price: 2.45},
        {id: 2, image: samurai, title: "Samurai", price: 2.45},
        {id: 3, image: samurai, title: "Samurai", price: 2.45},
        {id: 4, image: samurai, title: "Samurai", price: 2.45},
        {id: 5, image: samurai, title: "Samurai", price: 2.45},
        {id: 6, image: samurai, title: "Samurai", price: 2.45},
        {id: 7, image: samurai, title: "Samurai", price: 2.454},
        {id: 8, image: samurai, title: "Samurai", price: 2.454},
        {id: 9, image: samurai, title: "Samurai", price: 2.454},
        {id: 10, image: samurai, title: "Samurai", price: 2.454},
        {id: 11, image: samurai, title: "Samurai", price: 2.454},
        {id: 12, image: samurai, title: "Samurai", price: 2.454}
    ]);

    return (
        <div className="home__prompts">
            <div className="prompts">
                <Title>Trending Prompts</Title>
                <PromptsList prompts={prompts}/>
            </div>
            <div className="prompts">
                <Title>Most Popular Prompts This Month</Title>
                <PromptsList prompts={prompts}/>
            </div>
            <div className="prompts">
                <Title>Most Popular Prompts This Month</Title>
                <PromptsList prompts={prompts}/>
            </div>
        </div>
    );
};

export default HomePrompts;
