import React, {useEffect, useState} from 'react';
import PromptInfo from "../components/PromptInfo/PromptInfo";
import PromptReviews from "../components/PromptInfo/PromptReviews";
import PromptSimilar from "../components/PromptInfo/PromptSimilar";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import {getProductDetails} from "../API/useParserService";
import {Spin} from "antd";
import {useAuth} from "../context/AuthContext";
import {getProfile} from "../API/useProfileService";

const PromptDetails = () => {
    const { id: productId } = useParams();
    const [profile, setProfile] = useState([]);
    const [product, setProduct] = useState(null);
    const { token } = useAuth();

    const [fetchProduct, isLoading, error] = useFetching(async () => {
        const data = await getProductDetails(productId);
        setProduct(data);
    });

    const [fetchProfile, isLoadingProf, errorProf] = useFetching(async () => {
        const data = await getProfile(token);
        setProfile(data.profile);
    });

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    useEffect(() => {
        if (token) {
            fetchProfile();
        }
    }, [token]);

    if (isLoading || isLoadingProf) {
        return <div className={'spin__group'}><Spin size={'large'}/></div>;
    }
    if (error || errorProf) {
        return <h1 style={{ fontSize: "42px" }}>{error}</h1>;
    }
    if (!product) {
        return <h1 style={{fontSize: "42px"}}>Not found</h1>;
    }

    return (
        <div className="prompt__info-wrapper">
            <PromptInfo product={product} productId={productId} profile={profile}/>
            <PromptReviews product={product} profile={profile} productId={productId}/>
            <PromptSimilar/>
        </div>
    );
};

export default PromptDetails;