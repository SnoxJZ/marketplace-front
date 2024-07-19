import React, { useState } from 'react';
import Title from "../../ui/Title/Title";
import "./HomePrompts.css";
import "react-multi-carousel/lib/styles.css";
import PromptsList from "./PromptsList";
import promptItems from "./PromptItems";

const HomePrompts = () => {

    return (
        <div className="home__prompts">
            <div className="prompts">
                <Title>Trending Prompts</Title>
                <PromptsList prompts={promptItems}/>
            </div>
            <div className="prompts">
                <Title>Most Popular Prompts This Month</Title>
                <PromptsList prompts={promptItems}/>
            </div>
            <div className="prompts">
                <Title>Most Popular Prompts This Month</Title>
                <PromptsList prompts={promptItems}/>
            </div>
        </div>
    );
};

export default HomePrompts;
