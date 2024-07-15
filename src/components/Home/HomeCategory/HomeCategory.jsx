import React, {useState} from 'react';
import Title from "../../ui/Title/Title";
import "./HomeCategory.css"
import samuraiWide from "../../../assets/Home/samurai-wide.png"
import CardWide from "../../Card/CardWide";

const HomeCategory = () => {
    const [category, setCategory] = useState([
        {id: 1, title: "3D"},
        {id: 2, title: "Anime"},
        {id: 3, title: "Cartoon"},
        {id: 4, title: "Art"},
        {id: 5, title: "Logo"},
        {id: 6, title: "Mockup"},
        {id: 7, title: "Nature"},
        {id: 8, title: "People"},
    ])

    const [categoryItem, setCategoryItem] = useState([
        {id: 1, image: samuraiWide, title: "Samurai", price: 2.45},
        {id: 2, image: samuraiWide, title: "Samurai", price: 2.45},
        {id: 3, image: samuraiWide, title: "Samurai", price: 2.45},
        {id: 4, image: samuraiWide, title: "Samurai", price: 2.45},
        {id: 5, image: samuraiWide, title: "Samurai", price: 2.45},
        {id: 6, image: samuraiWide, title: "Samurai", price: 2.45}
    ])

    return (
        <div className="home__category">
            <div className="popular__header">
                <Title className="popular__title">Popular category</Title>
                <span className="line"></span>
            </div>
            <div className="home__categories">
                {category.map(category =>
                    <div className="category__item" key={category.id}>
                        <h1 className="category__title">{category.title}</h1>
                    </div>
                )}
            </div>
            <div className="home__category-items">
                {categoryItem.map(item =>
                    <CardWide item={item} key={item.id}/>
                )}
            </div>
        </div>
    );
};

export default HomeCategory;