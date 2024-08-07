import React from 'react';
import Title from "../ui/Title/Title";
import {Link} from "react-router-dom";

const FooterContacts = () => {
    return (
        <div className="footer__contacts">
            <Title>Contacts</Title>
            <ul className="footer__items">
                <li className="footer_item info">info@artallai.com</li>
                <li className="footer_item info">+480673585644</li>
                <Link to="/contacts">
                    <li className="footer_item">Contacts</li>
                </Link>
            </ul>
        </div>
    );
};

export default FooterContacts;