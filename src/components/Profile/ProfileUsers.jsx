import React, { useEffect, useState } from 'react';
import defaultAva from "../../assets/Profile/avatar-default.png";
import Title from "../ui/Title/Title";
import "./Profile.css";
import PromptsList from "../Home/HomePrompts/PromptsList";
import Review from "../Review/Review";
import { useMediaQuery } from "rsuite";
import { getProfileByNickname } from "../../API/useProfileService";
import { getProductDetails } from "../../API/useParserService";
import { useFetching } from "../../hooks/useFetching";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

const ProfileComp = () => {
    const { nickname } = useParams();
    const [profile, setProfile] = useState({});
    const [isTablet] = useMediaQuery('(max-width: 896px)');
    const [products, setProducts] = useState([]);

    const [fetchProfile, isLoading, error] = useFetching(async () => {
        const data = await getProfileByNickname(nickname);
        setProfile(data);
    });

    const [fetchProducts, isLoadingProd, errorProd] = useFetching(async () => {
        if (profile.purchases && profile.purchases.length > 0) {
            const productDetails = await Promise.all(profile.purchases.map(id => getProductDetails(id)));
            setProducts(productDetails);
        }
    });

    useEffect(() => {
        fetchProfile();
    }, [nickname]);

    useEffect(() => {
        if (profile.purchases && profile.purchases.length > 0) {
            fetchProducts();
        }
    }, [profile.purchases]);

    return (
        <div className="profile">
            <div className="profile-container">
                {isLoading
                    ? <Spin />
                    :
                    <div className="user-info">
                        <img src={defaultAva} alt="avatar" />
                        <Title fontSize={isTablet ? "24px" : "48px"}>{profile.nickname}</Title>
                    </div>
                }
                {error && <p style={{ marginTop: 20, color: "red" }}>{error}</p>}
            </div>
            <div className="prompts">
                <div className="prompts__profile-head">
                    <Title>Ordered images</Title>
                    <span className="profile__line"></span>
                </div>
                {isLoadingProd ? (
                    <Spin/>
                ) : (
                    products.length > 0 ? (
                        <PromptsList prompts={products}/>
                    ) : (
                        <p style={{textAlign: "center", fontSize: "24px"}}>No purchased products found.</p>
                    )
                )}
                {errorProd && <p style={{ marginTop: 20, color: "red" }}>{errorProd}</p>}
            </div>
            {/*<div className="prompt__reviews">*/}
            {/*    <div className="prompts__profile-head mob">*/}
            {/*        <Title>{profile.reviews ? profile.reviews.length : 0} creator reviews</Title>*/}
            {/*        <span className="profile__line"></span>*/}
            {/*    </div>*/}
            {/*    <div className="reviews__list" style={{ marginTop: isTablet ? 0 : 28 }}>*/}
            {/*        {profile.reviews && profile.reviews.length > 0 ? (*/}
            {/*            profile.reviews.map((item, index) =>*/}
            {/*                <Review review={item} key={index} />*/}
            {/*            )*/}
            {/*        ) : (*/}
            {/*            <p style={{textAlign: "center", fontSize: "24px"}}>No reviews available.</p>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default ProfileComp;
