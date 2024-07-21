import React from 'react';
import FaqAccordion from "../components/FAQ/FaqAccordion";
import FaqInfo from "../components/FAQ/FaqInfo";

const Faq = () => {
    return (
        <div className="faq">
            <FaqInfo/>
            <FaqAccordion/>
        </div>
    );
};

export default Faq;