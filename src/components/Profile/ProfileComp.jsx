import React, { useEffect, useState } from 'react';
import defaultAva from "../../assets/Profile/avatar-default.png";
import Title from "../ui/Title/Title";
import Button from "../ui/Button/Button";
import "./Profile.css";
import PromptsList from "../Home/HomePrompts/PromptsList";
import Review from "../Review/Review";
import { Link } from "react-router-dom";
import { useMediaQuery } from "rsuite";
import ModalDeposit from "../ModalDeposit/ModalDeposit";
import { getProfile } from "../../API/useProfileService";
import { useFetching } from "../../hooks/useFetching";
import { useAuth } from "../../context/AuthContext";
import { Spin } from "antd";
import { getProductDetails } from "../../API/useParserService";
import {getBalance} from "../../API/usePaymentsService";

const ProfileComp = () => {
    const [profile, setProfile] = useState({});
    const [reviews, setReviews] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [products, setProducts] = useState([]);
    const [deposits, setDeposits] = useState([])
    const [balance, setBalance] = useState('')
    const [isTablet] = useMediaQuery('(max-width: 896px)');
    const [modalActive, setModalActive] = useState(false);
    const { token } = useAuth();

    const [fetchProfile, isLoading, error] = useFetching(async () => {
        const data = await getProfile(token);
        setProfile(data.profile);
        setReviews(data.reviews);
        setTransactions(data.transactions);
        setDeposits(data.deposits);
    });

    const [fetchBalance, isLoadingBal, errorBal] = useFetching(async () => {
        if (profile) {
            const data = await getBalance(profile._id, token);
            setBalance(data.balance)
        }
    });

    const [fetchProducts, isLoadingProd, errorProd] = useFetching(async () => {
        if (transactions && transactions.length > 0) {
            const productDetails = await Promise.all(transactions.map(trx => getProductDetails(trx.product_id)));
            setProducts(productDetails);
        }
    });

    useEffect(() => {
        fetchProfile();
    }, []);

    useEffect(() => {
        if (profile) {
            fetchBalance();
        }
    }, [profile]);

    useEffect(() => {
        if (transactions && transactions.length > 0) {
            fetchProducts();
        }
    }, [transactions]);

    return (
        isLoading
        ? <div className={'spin__group'}><Spin size={"large"}/></div>
            :
        (<div className="profile">
            <div className="profile-container">
                <div className="user-info">
                <img 
                    src={profile.avatar ? `https://artallai.com/api/${profile.avatar.replace('app/', '')}?t=${new Date().getTime()}` : defaultAva}
                    alt="" 
                    className="auth__profile-avatar"
                />
                    <Title fontSize={isTablet ? "24px" : "48px"}>{profile.nickname}</Title>
                </div>
                {error && <p style={{marginTop: 20, color: "red"}}>{error}</p>}
                <div className="profile__btns">
                    <Link to="/settings">
                        <Button>Settings</Button>
                    </Link>
                    <Button id={'buy-btn'} borderColor={'#FF8C06'} onClick={() => setModalActive(true)}>Buy ART</Button>
                </div>
            </div>
            <div className="user__balance-wrapper">
                <div className="user__balance">
                    <Title color={'#ED43DC'}>Balance:</Title>
                    <h1 className="profile__balance">{isLoadingBal ? <Spin/> : `${balance ? balance.toFixed(1) : 0} ART`}</h1>
                </div>
                {errorBal && <p style={{marginTop: 20, color: "red"}}>{error}</p>}
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
            {/*        <Title>Creator reviews</Title>*/}
            {/*        <span className="profile__line"></span>*/}
            {/*    </div>*/}
            {/*    {reviews.length > 0 ? (*/}
            {/*        <div className="reviews__list" style={{marginTop: isTablet ? 0 : 28}}>*/}
            {/*            {reviews.map((item, index) =>*/}
            {/*                <Review review={item} key={index}/>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <p style={{textAlign: "center", fontSize: "24px"}}>No reviews available.</p>*/}
            {/*    )}*/}
            {/*</div>*/}

            <div className="deposits">
                <div className="prompts__profile-head mob">
                    <Title>User deposits</Title>
                    <span className="profile__line"></span>
                </div>
                {deposits.length > 0 ? (
                    <div className="deposits__list" style={{marginTop: isTablet ? 0 : 28}}>
                        {deposits.map((item, index) =>
                            <div className="deposit__item" key={index}>
                                <div className="deposit__info">
                                    <h1 className="deposit__info-title">Replenishment amount: </h1>
                                    <h1 className="deposit__info-det">{item.amount} ART</h1>
                                </div>
                                <div className="deposit__info">
                                    <h1 className="deposit__info-title">Date: </h1>
                                    <h1 className="deposit__info-det">{item.created_at}</h1>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <p style={{textAlign: "center", fontSize: "24px"}}>Deposits not found.</p>
                )}
            </div>
            <ModalDeposit modalActive={modalActive} setModalActive={setModalActive} profileId={profile._id}/>
        </div>)
    );
};

export default ProfileComp;
