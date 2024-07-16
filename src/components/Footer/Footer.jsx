import React from 'react';
import "./Footer.css"
import Title from "../ui/Title/Title";
import instagram from "../../assets/Footer/instagram.png"
import telegram from "../../assets/Footer/telegram.png"
import facebook from "../../assets/Footer/facebook.png"
import mastercard from "../../assets/Footer/mastercard.png"
import visa from "../../assets/Footer/visa.png"

const Footer = () => {
    return (
        <div className="footer">
            <span className="footer_rect"></span>
            <div className="footer__links">
                <div className="footer__main">
                    <Title>Main</Title>
                    <ul className="footer__items">
                        <li className="footer_item">About us</li>
                        <li className="footer_item">Marketplace</li>
                        <li className="footer_item">Contacts</li>
                        <li className="footer_item">FAQ</li>
                    </ul>
                </div>
                <div className="footer__categories">
                    <Title>Popular categories</Title>
                    <div className="footer__categories-wrapper">
                        <ul className="footer__items">
                            <li className="footer_item">3d</li>
                            <li className="footer_item">Anime</li>
                            <li className="footer_item">Cartoon</li>
                            <li className="footer_item">Art</li>
                        </ul>
                        <ul className="footer__items">
                            <li className="footer_item">Logo</li>
                            <li className="footer_item">Mockup</li>
                            <li className="footer_item">Nature</li>
                            <li className="footer_item">People</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__contacts">
                    <Title>Contacts</Title>
                    <ul className="footer__items">
                        <li className="footer_item">name@gmail.com</li>
                        <li className="footer_item">name@gmail.com</li>
                        <li className="footer_item">+480673585644</li>
                    </ul>
                </div>
                <div className="footer__follow">
                    <Title>Follow us</Title>
                    <div className="footer__img">
                        <img src={instagram} alt="instagram" className="social__icon"/>
                        <img src={telegram} alt="telegram" className="social__icon"/>
                        <img src={facebook} alt="facebook" className="social__icon"/>
                    </div>
                </div>
            </div>
            <span className="footer__line"></span>
            <div className="footer__info">
                <div className="footer__img">
                    <img src={mastercard} alt="mastercard"/>
                    <img src={visa} alt="visa"/>
                </div>
                <div className="footer__inf">
                    <p className="footer_item" style={{marginTop: 24}}>
                        Aleja Jana Pawla II, nr 43A, lok. 37B,
                    </p>
                </div>
                <div className="footer__inf">
                    <p className="footer_item" style={{marginTop: 24}}>
                        © NameBase 2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;