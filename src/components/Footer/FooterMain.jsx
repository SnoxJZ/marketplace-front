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
                <Link to="marketplace">
                    <li className="footer_item">Marketplace</li>
                </Link>
                <Link to="/contacts">
                    <li className="footer_item">Contacts</li>
                </Link>
                <Link to="/faq">
                    <li className="footer_item">FAQ</li>
                </Link>
            </ul>
        </div>
    );
};

export default FooterMain;