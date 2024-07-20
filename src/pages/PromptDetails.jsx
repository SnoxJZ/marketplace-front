import React from 'react';
import PromptInfo from "../components/PromptInfo/PromptInfo";
import PromptReviews from "../components/PromptInfo/PromptReviews";
import PromptSimilar from "../components/PromptInfo/PromptSimilar";

const PromptDetails = () => {
    return (
        <div className="prompt__info-wrapper">
            <PromptInfo/>
            <PromptReviews/>
            <PromptSimilar/>
        </div>
    );
};

export default PromptDetails;