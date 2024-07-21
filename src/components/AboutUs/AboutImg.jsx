import React, {useState} from 'react';
import samurai from "../../assets/Home/samurai.png";
import tree from "../../assets/Home/tree.png";
import hornet from "../../assets/Home/hornet.png";
import Card from "../Card/Card";

const AboutImg = () => {
    const [group1, setGroup1] = useState([
        {id: 1, image: samurai, title: "Samurai", price: 2.45},
        {id: 26, image: tree, title: "Tree", price: 2.45},
    ])

    const [group2, setGroup2] = useState([
        {id: 26, image: tree, title: "Tree", price: 2.45},
        {id: 3, image: hornet, title: "Samurai", price: 2.45},
        {id: 1, image: samurai, title: "Samurai", price: 2.45},
    ])

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