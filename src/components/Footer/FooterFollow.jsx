import React from 'react';
import Title from "../ui/Title/Title";
import instagram from "../../assets/Footer/instagram.png";
import telegram from "../../assets/Footer/telegram.png";
import twitter from "../../assets/Footer/twitter.png";

const FooterFollow = () => {
    return (
        <div className="footer__follow">
            <Title>Follow us</Title>
            <div className="footer__img">
                <a href="https://www.instagram.com/artallai/">
                    <img src={instagram} alt="instagram" className="social__icon"/>
                </a>
                <a href="https://x.com/artallai/ ">
                    <img src={twitter} alt="facebook" className="social__icon"/>
                </a>
                <a href="https://t.me/artallai">
                    <img src={telegram} alt="telegram" className="social__icon"/>
                </a>
            </div>
        </div>
    );
};

export default FooterFollow;