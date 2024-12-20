import React from 'react';
import Title from "../ui/Title/Title";
import "./Faq.css"

const FaqInfo = () => {
    return (
        <div className="faq__info">
            <Title fontSize="48px" style={{textAlign: "center"}} id="faq__header">FAQ</Title>
            <p className="faq__text">If you can't find the answer to your question here, get in contact with us via email. If you are looking for specific guidance on what products can be sold on Artallai, read our product submission guidelines.</p>
        </div>
    );
};

export default FaqInfo;