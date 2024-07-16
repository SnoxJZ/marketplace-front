import React, {useState} from 'react';
import Title from "../../ui/Title/Title";
import "./HomePrompts.css"
import samurai from "../../../assets/Home/samurai.png";
import Card from "../../Card/Card";
import Button from "../../ui/Button/Button";
import tree from "../../../assets/Home/tree.png";

const HomePrompts = () => {
    const [prompts, setPrompts] = useState([
        {id: 1, image: samurai, title: "Samurai", price: 2.45},
        {id: 2, image: samurai, title: "Samurai", price: 2.45},
        {id: 3, image: samurai, title: "Samurai", price: 2.45},
        {id: 4, image: samurai, title: "Samurai", price: 2.45},
        {id: 5, image: samurai, title: "Samurai", price: 2.45},
        {id: 6, image: samurai, title: "Samurai", price: 2.45},
        {id: 7, image: tree, title: "Samurai", price: 2.453},
        {id: 8, image: tree, title: "Samurai", price: 2.453},
        {id: 9, image: tree, title: "Samurai", price: 2.453},
        {id: 10, image: tree, title: "Samurai", price: 2.453},
        {id: 11, image: tree, title: "Samurai", price: 2.453},
        {id: 12, image: tree, title: "Samurai", price: 2.453}
    ]);

    return (
        <div className="home__prompts">
            <div className="trending__prompts">
                <Title>Trending Prompts</Title>
                <div className="prompts__list">
                    <div className="prompts__list-items">
                        {prompts.map(prompt =>
                            <Card card={prompt} key={prompt.id}/>
                        )}
                    </div>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="41" viewBox="0 0 22 41" fill="none">
                            <path d="M1 1L20.5 20.5L1 40" stroke="white" stroke-linecap="round"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomePrompts;