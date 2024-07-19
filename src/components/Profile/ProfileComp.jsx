import React, {useState} from 'react';
import profileAva from "../../assets/Profile/profile-avatar.png"
import Title from "../ui/Title/Title";
import Button from "../ui/Button/Button";
import "./Profile.css"
import promptItems from "../Home/HomePrompts/PromptItems";
import PromptsList from "../Home/HomePrompts/PromptsList";
import avatar from "../../assets/Reviews/avatar.png";
import {Rating} from "@mui/material";
import Review from "../Review/Review";


const ProfileComp = () => {
    const [userInf, setUserInf] = useState({avatar: profileAva, name: "Rona Fr"})

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
                    <Title fontSize="48px">{userInf.name}</Title>
                </div>
                <Button>Settings</Button>
            </div>
            <div className="prompts">
                <div className="prompts__profile-head">
                    <Title>Trending Prompts</Title>
                    <span className="profile__line"></span>
                </div>
                <PromptsList prompts={promptItems}/>
            </div>
            <div className="prompt__reviews">
                <div className="prompts__profile-head">
                    <Title>100 creator reviews</Title>
                    <span className="profile__line"></span>
                </div>
                <div className="reviews__list" style={{marginTop: 28}}>
                {review.map(item =>
                        <Review review={item} key={item.id}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileComp;