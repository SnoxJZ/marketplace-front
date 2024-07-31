import React, {useEffect, useState} from 'react';
import "./PromptInfo.css"
import PromptInfoDetails from "./PromptInfoParts/PromptInfoDetails";
import PromptInfoStat from "./PromptInfoParts/PromptInfoStat";
import PromptInfoGet from "./PromptInfoParts/PromptInfoGet";
import axios from "axios";


const PromptInfo = ({product, productId, profile}) => {
    const [rating, setRating] = useState(product.rating);

    const fetchProductRating = async () => {
        try {
            const response = await axios.get(`/product/${productId}/rating`);
            setRating(response.data.rating);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProductRating();
    }, []);

    const handleFavoriteChange = () => {
        fetchProductRating();
    };

    return (
        <div className="prompt__info">
            <div className="prompt__info-details">
                <PromptInfoDetails product={product} productId={productId} onFavoriteChange={handleFavoriteChange} profileId={profile._id}/>
                <PromptInfoStat product={product} rating={rating}/>
                <PromptInfoGet product={product} profileId={profile._id} productId={productId}/>
            </div>
            <div className="prompt__info-img">
                <img src={product.image_url} alt="groupImg"/>
            </div>
        </div>
    );
};

export default PromptInfo;
