import React from 'react';
import Title from "../ui/Title/Title";
import {Link} from "react-router-dom";

const FooterCategories = () => {
    return (
        <div className="footer__categories">
            <Title>Popular categories</Title>
            <div className="footer__categories-wrapper">
                <ul className="footer__items">
                    <Link to="/products"><li className="footer_item">3d</li></Link>
                    <Link to="/products"><li className="footer_item">Anime</li></Link>
                    <Link to="/products"><li className="footer_item">Cartoon</li></Link>
                    <Link to="/products"><li className="footer_item">Art</li></Link>
                </ul>
                <ul className="footer__items">
                    <Link to="/products"><li className="footer_item">Logo</li></Link>
                    <Link to="/products"><li className="footer_item">Mockup</li></Link>
                    <Link to="/products"><li className="footer_item">Nature</li></Link>
                    <Link to="/products"><li className="footer_item">People</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default FooterCategories;