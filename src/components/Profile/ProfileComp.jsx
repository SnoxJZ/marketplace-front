import React, {useState} from 'react';
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


const ProfileComp = () => {
    const [userInf, setUserInf] = useState({avatar: profileAva, name: "Rona Fr", balance: 250})
    const [isTablet] = useMediaQuery('(max-width: 896px)');
    const [modalActive, setModalActive] = useState(false);

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
                <div className="user-info">
                    <img src={userInf.avatar} alt="avatar"/>
                    <Title fontSize={isTablet ? "24px" : "48px"}>{userInf.name}</Title>
                </div>
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
                    <h1 className="profile__balance">{userInf.balance} ART</h1>
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