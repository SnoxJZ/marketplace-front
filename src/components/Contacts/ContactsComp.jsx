import React, {useEffect, useState} from 'react';
import Title from "../ui/Title/Title";
import facebook from "../../assets/Contacts/facebook.png"
import twitter from "../../assets/Contacts/twitter.png"
import instagram from "../../assets/Contacts/instagram.png"
import instagramLight from "../../assets/Contacts/instagram-light.png"
import facebookLight from "../../assets/Contacts/facebook-light.png"
import twitterLight from "../../assets/Contacts/twitter-light.png"
import "./Contacts.css"
import {useMediaQuery} from "rsuite";

const ContactsComp = () => {
    const [isTablet] = useMediaQuery('(max-width: 896px)');
    const [instagramImg, setInstagramImg] = useState(instagram);
    const [twitterImg, setTwitterImg] = useState(twitter);
    const [facebookImg, setFacebookImg] = useState(facebook);

    useEffect(() => {
        const bodyClassList = document.body.classList;
        if (bodyClassList.contains('light')) {
            setInstagramImg(instagramLight);
            setTwitterImg(twitterLight);
            setFacebookImg(facebookLight);
        } else {
            setInstagramImg(instagram);
            setTwitterImg(twitter);
            setFacebookImg(facebook);
        }
    }, []);

    return (
        <div className="contact__page">
            <div className="contact__text">
                <Title fontSize={isTablet ? "36px" : "48px"}>Contacts</Title>
                <h1 style={{fontSize: isTablet ? "20px" : "32px"}}>Welcoming all feedback or questions.</h1>
                <h1 style={{color: "#D01FDF", fontSize: "24px"}}>name@gmail.com</h1>
            </div>
            <div className="contact__icons">
                <img src={instagramImg} alt="instagram"/>
                <img src={twitterImg} alt="twitter"/>
                <img src={facebookImg} alt="facebook"/>
            </div>
        </div>
    );
};

export default ContactsComp;