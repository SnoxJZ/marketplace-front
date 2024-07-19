import React from 'react';
import Title from "../ui/Title/Title";
import CardWide from "../Card/CardWide";
import wideItems from "../Card/WIdeItems";

const PromptSimilar = () => {

    return (
        <div className="prompt__similar">
            <div className="similar__header">
                <Title>Similar Prompts</Title>
            </div>
            <div className="similar__items">
                {wideItems.map(item =>
                    <CardWide item={item} key={item.id}/>
                )}
            </div>
        </div>
    );
};

export default PromptSimilar;