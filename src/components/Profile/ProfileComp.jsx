import React, {useEffect, useState} from 'react';
import profileAva from "../../assets/Profile/profile-avatar.png"
import Title from "../ui/Title/Title";
import Button from "../ui/Button/Button";
import "./Profile.css"
import promptItems from "../Home/HomePrompts/PromptItems";
import PromptsList from "../Home/HomePrompts/PromptsList";
import avatar from "../../assets/Reviews/avatar.png";
import Review from "../Review/Review";
import {Link} from "react-router-dom";
import {useMediaQuery} from "rsuite";
import ModalDeposit from "../ModalDeposit/ModalDeposit";
import {getProfile} from "../../API/useProfileService";
import {useFetching} from "../../hooks/useFetching";
import {useAuth} from "../../context/AuthContext";
import {Spin} from "antd";


const ProfileComp = () => {
    const [profile, setProfile] = useState([]);
    const [isTablet] = useMediaQuery('(max-width: 896px)');
    const [modalActive, setModalActive] = useState(false);
    const { token } = useAuth();

    const [fetchProfile, isLoading, error] = useFetching(async () => {
        const data = await getProfile(token);
        setProfile(data);
    });
    useEffect(() => {
        fetchProfile();
    }, []);

    const [review, setReview] = useState([
        {id: 1, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
        {id: 2, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
        {id: 3, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
        {id: 4, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
        {id: 5, avatar: avatar, name: "Rona Fr", date: "26.05.2024", rate: "4.0", text: "Very good"},
    ])

    return (
        <div className="profile">
            <div className="profile-container">
                {isLoading
                    ? <Spin/>
                    :
                    <div className="user-info">
                        <img src={`http://localhost:8000/${profile.avatar}`} alt="avatar"/>
                        <Title fontSize={isTablet ? "24px" : "48px"}>{profile.nickname}</Title>
                    </div>
                }
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
                    {isLoading
                        ? <Spin/>
                        : <h1 className="profile__balance">{profile.balance} ART</h1>
                    }
                </div>
            </div>
            <div className="prompts">
                <div className="prompts__profile-head">
                    <Title>Ordered prompts</Title>
                    <span className="profile__line"></span>
                </div>
                <PromptsList prompts={promptItems}/>
            </div>
            <div className="prompt__reviews">
                <div className="prompts__profile-head mob">
                    <Title>100 creator reviews</Title>
                    <span className="profile__line"></span>
                </div>
                <div className="reviews__list" style={{marginTop: isTablet ? 0 : 28}}>
                    {review.map(item =>
                        <Review review={item} key={item.id}/>
                    )}
                </div>
            </div>
            <ModalDeposit modalActive={modalActive} setModalActive={setModalActive}/>
        </div>
    );
};

export default ProfileComp;