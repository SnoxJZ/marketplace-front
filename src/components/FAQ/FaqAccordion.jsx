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
            value: "What is NameBase?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            value: "What is a Prompt Engineer?",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
        },
        {
            value: "What is the revenue split?",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            value: "How do I get paid?",
            description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        },
        {
            value: "How will I know how many sales I've made?",
            description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
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
