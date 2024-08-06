import React from 'react';
import Title from "../ui/Title/Title";
import telegram from "../../assets/Contacts/telegram.png"
import twitter from "../../assets/Contacts/twitter.png"
import instagram from "../../assets/Contacts/instagram.png"
import "./Contacts.css"
import {useMediaQuery} from "rsuite";

const ContactsComp = () => {
    const [isTablet] = useMediaQuery('(max-width: 896px)');

    return (
        <div className="contact__page">
            <div className="contact__text">
                <Title fontSize={isTablet ? "36px" : "48px"}>Contacts</Title>
                <h1 style={{fontSize: isTablet ? "20px" : "32px"}}>Welcoming all feedback or questions.</h1>
                <h1 style={{color: "#D01FDF", fontSize: "24px"}}>info@artallai.com</h1>
            </div>
            <div className="contact__icons">
                <a href="https://www.instagram.com/artallai/">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a href="https://x.com/artallai/ ">
                    <img src={twitter} alt="twitter"/>
                </a>
                <a href="https://t.me/artallai">
                    <img src={telegram} alt="facebook"/>
                </a>
            </div>
        </div>
    );
};

export default ContactsComp;