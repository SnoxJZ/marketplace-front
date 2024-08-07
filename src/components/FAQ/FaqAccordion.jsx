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
            description: "Artallai is a website for buying and selling images of DALL·E, GPT, Stable Diffusion + Midjourney. Images are generated text that are fed into complex AI models to get a desired output, for example an image of a certain object in a certain style."
        },
        {
            value: "What is a Prompt Engineer?",
            description: "A Prompt Engineer is a new kind of technician, skilled at crafting the text prompts required for an AI model to produce consistent outputs (e.g. images, text or code)."
        },
        {
            value: "How do I pay for images on Artallai?",
            description: "Artallai offers card/bank transfer and APM’s to receive payments from you."
        },
        {
            value: "How are most popular images determined?",
            description: "Most popular images are determined purely on their sales and views."
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
