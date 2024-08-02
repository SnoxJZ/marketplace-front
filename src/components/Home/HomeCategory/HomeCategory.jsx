import React, { useState, useEffect } from 'react';
import Title from "../../ui/Title/Title";
import "./HomeCategory.css";
import CardWide from "../../Card/CardWide";
import axios from 'axios';
import { useFetching } from '../../../hooks/useFetching';
import PlaceholderCardWide from "../../Card/PlaceholderCardWide";

const categories = [
    { id: 1, title: "3D", api: "/api/products_3D/" },
    { id: 2, title: "Anime", api: "/api/products_anime/" },
    { id: 3, title: "Cartoon", api: "/api/products_cartoon/" },
    { id: 4, title: "Art", api: "/api/products_art/" },
    { id: 5, title: "Logo", api: "/api/products_logo/" },
    { id: 6, title: "Mockup", api: "/api/products_Mockup/" },
    { id: 7, title: "Nature", api: "/api/products_Nature/" },
    { id: 8, title: "People", api: "/api/products_People/" },
];

const HomeCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        if (selectedCategory) {
            const response = await axios.get(selectedCategory.api, { params: { limit: 10 } });
            setItems(response.data);
        }
    };

    const [fetchData, isLoading, error] = useFetching(fetchItems);

    useEffect(() => {
        if (selectedCategory) {
            fetchData();
        }
    }, [selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="home__category">
            <div className="popular__header">
                <Title className="popular__title">Popular category</Title>
                <span className="line"></span>
            </div>
            <div className="home__categories">
                {categories.map(category =>
                    <div
                        className={`category__item ${selectedCategory?.id === category.id ? 'active' : ''}`}
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <h1 className="category__title">{category.title}</h1>
                    </div>
                )}
            </div>
            <div className="home__category-items">
                {isLoading ?
                    <div className="placeholder__card-group-wide">
                        <PlaceholderCardWide/>
                        <PlaceholderCardWide/>
                        <PlaceholderCardWide/>
                    </div>
                    : (
                    items.map(item =>
                        <CardWide item={item} key={item.id} />
                    )
                )}
                {error && <p style={{marginBottom: 20, color: "red"}}>{error}</p>}
            </div>
        </div>
    );
};

export default HomeCategory;