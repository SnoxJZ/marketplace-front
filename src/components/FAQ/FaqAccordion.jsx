import React, { useState } from 'react';
import Accordion from 'rsuite/Accordion';
import 'rsuite/Accordion/styles/index.css';
import "./Faq.css";
import {useMediaQuery} from "rsuite";

const FaqAccordion = () => {
    const [activeKey, setActiveKey] = useState(null);
    const [isTablet] = useMediaQuery('(max-width: 896px)');

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    const arrow = (isActive) => (
        <svg
            xmlns="http://www.w3.org/2000/svg" width="47" height="25" viewBox="0 0 47 25" fill="none"
            style={{
                transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                width: isTablet ? '28px' : '47px',
                height: isTablet ? '14px' : '25px',
            }}
        >
            <path d="M1 1L23.5 23.5L46 1" stroke="#ED43DC" strokeLinecap="round" />
        </svg>
    );

    const faqs = [
        {
            value: "What is Artallai?",
            description: "Artallai is a marketplace for buying and selling prompts for DALL·E, GPT, Stable Diffusion + Midjourney. Prompts are sentences of text that are fed into complex AI models to get a desired output, for example and image of a certain object in a certain style."
        },
        {
            value: "What is a Prompt Engineer?",
            description: "A Prompt Engineer is a new kind of technician, skilled at crafting the text prompts required for an AI model to produce consistent outputs (e.g. images, text or code)."
        },
        {
            value: "What is the revenue split?",
            description: "Prompt sellers keep 80% of every sale of their prompt, and on custom prompt jobs. PromptBase takes a 20% fee which helps run our platform and offer services like support."
        },
        {
            value: "How do I get paid?",
            description: "PromptBase uses FYST to send out payments to you."
        },
        {
            value: "How are most popular prompts determined?",
            description: "Most popular prompts are determined purely on their sales and views."
        }
    ];

    return (
        <div className="faq__accordion">
            {faqs.map((faq, index) => (
                <Accordion key={index} activeKey={activeKey} onSelect={() => handleToggle(index)}>
                    <Accordion.Panel
                        header={
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>{faq.value}</span>
                                {arrow(activeKey === index)}
                            </div>
                        }
                        eventKey={index}
                    >
                        {faq.description}
                    </Accordion.Panel>
                </Accordion>
            ))}
        </div>
    );
};

export default FaqAccordion;
