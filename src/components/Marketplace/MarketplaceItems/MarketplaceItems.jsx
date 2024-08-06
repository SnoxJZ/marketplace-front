import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "./MarketplaceItems.css";
import Card from "../../Card/Card";
import PlaceholderCard from "../../Card/PlaceholderCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FilterContext } from '../../../context/FilterContext';
import { fetchProductsByCategory, fetchProductsByPrice, fetchProductsByRating, fetchProductsByTitle } from "../../../API/useParserService";
import {useLocation, useNavigate} from "react-router-dom";

const categories = [
    { id: 1, title: "3D", api: "/api/products_3D/" },
    { id: 2, title: "Anime", api: "/api/products_anime/" },
    { id: 3, title: "Cartoon", api: "/api/products_cartoon/" },
    { id: 4, title: "Art", api: "/api/products_art/" },
    { id: 5, title: "Logo", api: "/api/products_logo/" },
    { id: 6, title: "Mockup", api: "/api/products_Mockup/" },
    { id: 7, title: "Nature", api: "/api/products_Nature/" },
    { id: 8, title: "People", api: "/api/products_People/" },
    { id: 9, title: "Bundles", api: "/api/products_bundles/" },
    { id: 10, title: "Apps", api: "/api/products_apps/" },
    { id: 11, title: "Prompts", api: "/api/products/" },
    { id: 12, title: "Image", api: "/api/products_text/" },
    { id: 13, title: "Text", api: "/api/products_text/" },
    { id: 14, title: "All", api: "/api/products/" },
];

const MarketplaceItems = () => {
    const { filterType, priceRange, ratingRange, category, shouldFilter, setShouldFilter, page, setPage } = useContext(FilterContext);
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const resetSearchParams = () => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.delete('search');
        navigate({ search: searchParams.toString() });
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('search');

        const fetchItems = async () => {
            try {
                if (searchQuery) {
                    const data = await fetchProductsByTitle(page, searchQuery);
                    if (page === 1) {
                        setItems(data);
                    } else {
                        setItems(prevItems => [...prevItems, ...data]);
                    }
                    setHasMore(data.length > 0);
                } else {
                    const selectedCategory = categories.find(category => category.title === filterType);

                    if (selectedCategory) {
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
                    }
                }
                setError(null);
            } catch (error) {
                setError("No more items found");

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
                setError(null);
            } catch (error) {
                setError("Failed to load items, please try again later.");
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
                setError(null);
            } catch (error) {
                setError("Failed to load items, please try again later.");
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
                setError(null);
            } catch (error) {
                setError("Failed to load items, please try again later.");
            }
        };

        if (shouldFilter) {
            setItems([]);
            setPage(1);
            resetSearchParams();

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
        if (!isFirstRender) {
            setItems([]);
            setPage(1);
            resetSearchParams();
        } else {
            setIsFirstRender(false);
        }
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
                loader={error ? <p style={{ textAlign: 'center', color: 'red', fontSize: '24px'}}>{error}</p> : Array.from({ length: 20 }).map((_, index) => (
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
