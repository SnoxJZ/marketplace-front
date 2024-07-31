import React, {useEffect, useState} from 'react';
import Title from "../ui/Title/Title";
import CardWide from "../Card/CardWide";
import axios from "axios";
import {useFetching} from "../../hooks/useFetching";
import PlaceholderCardWide from "../Card/PlaceholderCardWide";

const PromptSimilar = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await axios.get('/products_Mockup/', { params: { limit: 10 } });
        setItems(response.data);
    };

    const [fetchData, isLoading, error] = useFetching(fetchItems);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="prompt__similar">
            <div className="similar__header">
                <Title>Similar Prompts</Title>
            </div>
            {isLoading ?
                <div className="similar__items">
                    <PlaceholderCardWide/>
                    <PlaceholderCardWide/>
                    <PlaceholderCardWide/>
                </div>
                : (
                    <div className="similar__items">
                        {items.map(item =>
                            <CardWide item={item} key={item.id}/>
                        )}
                    </div>
                )}
            {error && <p style={{marginBottom: 20, color: "red"}}>{error}</p>}

        </div>
    );
};

export default PromptSimilar;