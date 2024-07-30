import React from 'react';
import "./PromptInfo.css"
import PromptInfoDetails from "./PromptInfoParts/PromptInfoDetails";
import PromptInfoStat from "./PromptInfoParts/PromptInfoStat";
import PromptInfoGet from "./PromptInfoParts/PromptInfoGet";


const PromptInfo = ({product}) => {

    return (
        <div className="prompt__info">
            <div className="prompt__info-details">
                <PromptInfoDetails product={product}/>
                <PromptInfoStat product={product}/>
                <PromptInfoGet product={product}/>
            </div>
            <div className="prompt__info-img">
                <img src={product.image_url} alt="groupImg"/>
            </div>
        </div>
    );
};

export default PromptInfo;
