import React from 'react';
import samurai from "../../assets/Home/samurai.png";
import tree from "../../assets/Home/tree.png";
import hornet from "../../assets/Home/hornet.png";
import Card from "../Card/Card";
import "./AboutUs.css"

const AboutImg = () => {
    const group1 = [
        {id: 1, image_url: samurai, title: "Samurai", price: 2.45},
        {id: 26, image_url: tree, title: "Tree", price: 3.1},
    ]

    const group2 = [
        {id: 26, image_url: tree, title: "Tree", price: 2.45},
        {id: 3, image_url: hornet, title: "Bee", price: 2.2},
        {id: 1, image_url: samurai, title: "Samurai", price: 2.45},
    ]

    return (
        <div className="about__img-wrapper">
            <div className="about__img group1">
                {group1.map(card =>
                    <Card card={card} key={card.id}/>
                )}
            </div>
            <div className="about__img group2">
                {group2.map(card =>
                    <Card card={card} key={card.id}/>
                )}
            </div>
            <div className="about__img group1">
                {group1.map(card =>
                    <Card card={card} key={card.id}/>
                )}
            </div>
        </div>
    );
};

export default AboutImg;