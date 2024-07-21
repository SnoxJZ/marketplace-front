import React from 'react';
import "./AboutUs.css"
import Title from "../ui/Title/Title";
import Button from "../ui/Button/Button";
import {Link} from "react-router-dom";

const AboutText = () => {
    return (
        <div className="about__text">
            <Title>About us</Title>
            <p>We are a team of passionate blockchain enthusiasts who have come together to help you participate in this
                exciting new world. More specifically, we developed a platform to help you buy and sell your favorite
                cryptocurrencies using a variety of (often unusual) payment methods.</p>
            <Link to="/marketplace">
                <Button>Catalog</Button>
            </Link>
        </div>
    );
};

export default AboutText;