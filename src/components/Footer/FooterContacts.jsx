import React from 'react';
import Title from "../ui/Title/Title";

const FooterContacts = () => {
    return (
        <div className="footer__contacts">
            <Title>Contacts</Title>
            <ul className="footer__items">
                <li className="footer_item">name@gmail.com</li>
                <li className="footer_item">name@gmail.com</li>
                <li className="footer_item">+480673585644</li>
            </ul>
        </div>
    );
};

export default FooterContacts;