import React, { useEffect, useState, useRef, useCallback } from 'react';
import "./MarketplaceItems.css";
import Card from "../../Card/Card";
import { useFetching } from "../../../hooks/useFetching";
import { getPrompts } from "../../../API/useParserService";
import PlaceholderCard from "../../Card/PlaceholderCard";

const MarketplaceItems = () => {
    const [prompts, setPrompts] = useState([]);
    const [lastId, setLastId] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    const [fetchPrompts, isLoading, error] = useFetching(async () => {
        const data = await getPrompts(lastId);
        if (data.length > 0) {
            setPrompts(prevPrompts => {
                const existingPromptIds = prevPrompts.map(item => item.id);
                const newPrompts = data.filter(item => !existingPromptIds.includes(item.id));
                return [...prevPrompts, ...newPrompts];
            });
            setLastId(data[data.length - 1].id);
        } else {
            setHasMore(false);
        }
    });

    const observer = useRef();
    const lastElementRef = useCallback(node => {
        if (isLoading || !hasMore) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                fetchPrompts();
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore, fetchPrompts]);

    useEffect(() => {
        fetchPrompts();
    }, []);

    return (
        <div className="marketplace__items">
            {prompts.map((item, index) => (
                <Card ref={index === prompts.length - 1 ? lastElementRef : null} key={item.id} card={item} />
            ))}
            {isLoading && Array.from({ length: 20 }).map((_, index) => (
                <PlaceholderCard key={index} />
            ))}
            {error && <p style={{ marginBottom: 20, color: "red" }}>{error}</p>}
        </div>
    );
};

export default MarketplaceItems;
