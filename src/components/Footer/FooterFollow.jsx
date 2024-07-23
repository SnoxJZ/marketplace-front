import React from 'react';
import Title from "../ui/Title/Title";
import instagram from "../../assets/Footer/instagram.png";
import telegram from "../../assets/Footer/telegram.png";
import facebook from "../../assets/Footer/facebook.png";

const FooterFollow = () => {
    return (
        <div className="footer__follow">
            <Title>Follow us</Title>
            <div className="footer__img">
                <img src={instagram} alt="instagram" className="social__icon"/>
                <img src={telegram} alt="telegram" className="social__icon"/>
                <img src={facebook} alt="facebook" className="social__icon"/>
            </div>
        </div>
    );
};

export default FooterFollow;