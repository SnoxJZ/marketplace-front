import React, {useEffect, useState} from 'react';
import PromptInfo from "../components/PromptInfo/PromptInfo";
import PromptReviews from "../components/PromptInfo/PromptReviews";
import PromptSimilar from "../components/PromptInfo/PromptSimilar";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {getProductDetails} from "../API/useParserService";

const PromptDetails = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState(null);
    const [fetchProduct, isLoading, error] = useFetching(async () => {
        const data = await getProductDetails(productId);
        setProduct(data);
    });

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    if (isLoading) {
        return <h1 style={{ fontSize: "42px" }}>Loading...</h1>;
    }
    if (error) {
        return <h1 style={{ fontSize: "42px" }}>{error}</h1>;
    }
    if (!product) {
        return <h1 style={{fontSize: "42px"}}>Not found</h1>;
    }

    return (
        <div className="prompt__info-wrapper">
            <PromptInfo product={product}/>
            <PromptReviews product={product}/>
            <PromptSimilar/>
        </div>
    );
};

export default PromptDetails;