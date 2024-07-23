import React, { useState } from 'react';
import Title from "../../ui/Title/Title";
import "./HomePrompts.css";
import "react-multi-carousel/lib/styles.css";
import PromptsList from "./PromptsList";
import promptItems from "./PromptItems";
import {motion} from 'framer-motion';
import { prompts } from "../../../animation/AnimatedHome"

const HomePrompts = () => {

    return (
        <motion.div
            className="home__prompts"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            style={{overflow: 'hidden'}}
        >
            <motion.div custom={1} variants={prompts} transition={{ duration: 1, delay: 0.2 }} className="prompts">
                <Title>Trending Prompts</Title>
                <PromptsList prompts={promptItems}/>
            </motion.div>
            <motion.div custom={2} variants={prompts} transition={{ duration: 1, delay: 0.7 }} className="prompts">
                <Title>Most Popular Prompts This Month</Title>
                <PromptsList prompts={promptItems}/>
            </motion.div>
            <motion.div custom={3} variants={prompts} transition={{ duration: 1, delay: 1.2 }} className="prompts">
                <Title>Most Popular Prompts This Month</Title>
                <PromptsList prompts={promptItems}/>
            </motion.div>
        </motion.div>
    );
};

export default HomePrompts;
