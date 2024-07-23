import React from 'react';
import Title from "../ui/Title/Title";
import facebook from "../../assets/Contacts/facebook.png"
import twitter from "../../assets/Contacts/twitter.png"
import instagram from "../../assets/Contacts/instagram.png"
import "./Contacts.css"

const ContactsComp = () => {
    return (
        <div className="contact__page">
            <div className="contact__text">
                <Title fontSize="48px">Contacts</Title>
                <h1 style={{fontSize: "32px"}}>Welcoming all feedback or questions.</h1>
                <h1 style={{color: "#D01FDF", fontSize: "24px"}}>name@gmail.com</h1>
            </div>
            <div className="contact__icons">
                <img src={instagram} alt="instagram"/>
                <img src={twitter} alt="twitter"/>
                <img src={facebook} alt="facebook"/>
            </div>
        </div>
    );
};

export default ContactsComp;