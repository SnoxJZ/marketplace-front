import React from 'react';
import "./PromptInfo.css"
import {useParams} from "react-router-dom";
import productList from "../Marketplace/MarketplaceItems/ProductList";
import PromptInfoDetails from "./PromptInfoParts/PromptInfoDetails";
import PromptInfoStat from "./PromptInfoParts/PromptInfoStat";
import PromptInfoGet from "./PromptInfoParts/PromptInfoGet";

const PromptInfo = () => {
    const params = useParams();
    const productId = parseInt(params.id, 10);
    const product = productList.find(item => item.id === productId);

    if (!product) {
        return <h1 style={{fontSize: "42px"}}>Not found</h1>;
    }

    return (
        <div className="prompt__info">
            <div className="prompt__info-details">
                <PromptInfoDetails product={product}/>
                <PromptInfoStat product={product}/>
                <PromptInfoGet product={product}/>
            </div>
            <div className="prompt__info-img">
                <img src={product.details.groupImg} alt="groupImg"/>
            </div>
        </div>
    );
};

export default PromptInfo;
