import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "./MarketplaceItems.css";
import Card from "../../Card/Card";
import PlaceholderCard from "../../Card/PlaceholderCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FilterContext } from '../../../context/FilterContext';
import {fetchProductsByCategory, fetchProductsByPrice, fetchProductsByRating, fetchProductsByTitle} from "../../../API/useParserService";
import {useLocation} from "react-router-dom";

const categories = [
    { id: 1, title: "3D", api: "/products_3D/" },
    { id: 2, title: "Anime", api: "/products_anime/" },
    { id: 3, title: "Cartoon", api: "/products_cartoon/" },
    { id: 4, title: "Art", api: "/products_art/" },
    { id: 5, title: "Logo", api: "/products_logo/" },
    { id: 6, title: "Mockup", api: "/products_Mockup/" },
    { id: 7, title: "Nature", api: "/products_Nature/" },
    { id: 8, title: "People", api: "/products_People/" },
    { id: 9, title: "Bundles", api: "/products_bundles/" },
    { id: 10, title: "Apps", api: "/products_apps/" },
    { id: 11, title: "Prompts", api: "/products/" },
    { id: 12, title: "Image", api: "/products_text/" },
    { id: 13, title: "Text", api: "/products_text/" },
    { id: 14, title: "All", api: "/products/" },
];

const MarketplaceItems = () => {
    const { filterType, priceRange, ratingRange, category, shouldFilter, setShouldFilter } = useContext(FilterContext);
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('search');

        const fetchItems = async () => {
            if (searchQuery) {
                const data = await fetchProductsByTitle(page, searchQuery);
                setItems(prevItems => [...prevItems, ...data]);
                setHasMore(data.length > 0);
            } else {
                const selectedCategory = categories.find(category => category.title === filterType);

                if (selectedCategory) {
                    try {
                        const response = await axios.get(selectedCategory.api, {
                            params: { limit: 30, page },
                        });
                        const data = response.data;
                        if (page === 1) {
                            setItems(data);
                        } else {
                            setItems(prevItems => [
                                ...prevItems,
                                ...data.filter(item => !prevItems.some(existingItem => existingItem.id === item.id))
                            ]);
                        }
                        setHasMore(data.length > 0);
                    } catch (error) {
                        console.error("Error fetching items:", error);
                    }
                }
            }
        };

        fetchItems();
    }, [filterType, page, location.search]);

    useEffect(() => {
        const fetchItemsByPrice = async () => {
            try {
                const data = await fetchProductsByPrice(page, priceRange.min, priceRange.max);
                if (page === 1) {
                    setItems(data);
                } else {
                    setItems(prevItems => [
                        ...prevItems,
                        ...data.filter(item => !prevItems.some(existingItem => existingItem.id === item.id))
                    ]);
                }
                setHasMore(data.length > 0);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        const fetchItemsByRating = async () => {
            try {
                const data = await fetchProductsByRating(page, ratingRange.min, ratingRange.max);
                if (page === 1) {
                    setItems(data);
                } else {
                    setItems(prevItems => [
                        ...prevItems,
                        ...data.filter(item => !prevItems.some(existingItem => existingItem.id === item.id))
                    ]);
                }
                setHasMore(data.length > 0);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        const fetchItemsByCategory = async () => {
            try {
                const data = await fetchProductsByCategory(page, category);
                if (page === 1) {
                    setItems(data);
                } else {
                    setItems(prevItems => [
                        ...prevItems,
                        ...data.filter(item => !prevItems.some(existingItem => existingItem.id === item.id))
                    ]);
                }
                setHasMore(data.length > 0);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        if (shouldFilter) {
            setItems([]);
            setPage(1);
            if (priceRange.min !== '' && priceRange.max !== '') {
                fetchItemsByPrice();
            } else if (ratingRange.min !== '' && ratingRange.max !== '') {
                fetchItemsByRating();
            } else {
                fetchItemsByCategory();
            }
            setShouldFilter(false);
        }
    }, [shouldFilter, priceRange, ratingRange, category, page, setShouldFilter]);

    useEffect(() => {
        setItems([]);
        setPage(1);
    }, [filterType]);

    const fetchMoreData = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="marketplace__items">
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={Array.from({ length: 20 }).map((_, index) => (
                    <PlaceholderCard key={index} />
                ))}
                endMessage={<p style={{ textAlign: 'center' }}>No more items to load</p>}
            >
                {items.map((item) => (
                    <Card key={item.id} card={item} />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default MarketplaceItems;
