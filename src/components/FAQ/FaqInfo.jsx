import React from 'react';
import Title from "../ui/Title/Title";
import "./Faq.css"

const FaqInfo = () => {
    return (
        <div className="faq__info">
            <Title fontSize="48px">FAQ</Title>
            <p className="faq__text">If you can't find the answer to your question here, get in contact with us via
                email. If you are looking for specific guidance on what prompts can be sold on PromptBase, read our
                prompt submission guidelines.</p>
        </div>
    );
};

export default FaqInfo;