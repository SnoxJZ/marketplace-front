import React from 'react';
import Title from "../ui/Title/Title";

const FooterCategories = () => {
    return (
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
    );
};

export default FooterCategories;