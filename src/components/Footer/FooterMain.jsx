import React from 'react';
import Title from "../ui/Title/Title";
import {Link} from "react-router-dom";

const FooterMain = () => {
    return (
        <div className="footer__main">
            <Title>Main</Title>
            <ul className="footer__items">
                <Link to="/about">
                    <li className="footer_item">About us</li>
                </Link>
                <Link to="/tandcs">
                    <li className="footer_item">Terms of service</li>
                </Link>
                <Link to="/privacy">
                    <li className="footer_item">Privacy Policy</li>
                </Link>
                <Link to="/cookie">
                    <li className="footer_item">Cookie Notice</li>
                </Link>
            </ul>
        </div>
    );
};

export default FooterMain;