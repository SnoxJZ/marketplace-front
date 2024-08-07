import React, {useEffect, useState} from 'react';
import Title from "../../ui/Title/Title";
import "./HomePrompts.css";
import "react-multi-carousel/lib/styles.css";
import PromptsList from "./PromptsList";
import {motion} from 'framer-motion';
import { prompts } from "../../../animation/AnimatedHome"
import {useAuth} from "../../../context/AuthContext";
import {useFetching} from "../../../hooks/useFetching";
import {getFeaturedPrompts, getNewestPrompts, getPopularPrompts} from "../../../API/usePromptsService";

const HomePrompts = () => {
    const [featured, setFeatured] = useState([])
    const [popular, setPopular] = useState([])
    const [newest, setNewest] = useState([])
    const { token } = useAuth();

    const [fetchFeatured, isLoadingFeatured, errorFeatured] = useFetching(async () => {
        const data = await getFeaturedPrompts(token);
        setFeatured(data.map(product => ({
            id: product._id,
            image_url: product.image_url,
            title: product.title,
            price: product.price,
        })));
    });
    useEffect(() => {
        fetchFeatured();
    }, []);

    const [fetchPopular, isLoadingPopular, errorPopular] = useFetching(async () => {
        const data = await getPopularPrompts(token);
        setPopular(data.map(product => ({
            id: product._id,
            image_url: product.image_url,
            title: product.title,
            price: product.price,
        })));
    });
    useEffect(() => {
        fetchPopular();
    }, []);

    const [fetchNewest, isLoadingNewest, errorNewest] = useFetching(async () => {
        const data = await getNewestPrompts(token);
        setNewest(data.map(product => ({
            id: product._id,
            image_url: product.image_url,
            title: product.title,
            price: product.price,
        })));
    });
    useEffect(() => {
        fetchNewest();
    }, []);

    return (
        <motion.div
            className="home__prompts"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            style={{overflow: 'hidden'}}
        >
            <motion.div custom={1} variants={prompts} transition={{ duration: 1, delay: 0.2 }} className="prompts">
                <Title>Trending Images</Title>
                <PromptsList prompts={featured} isLoading={isLoadingFeatured}/>
                {errorFeatured && <p style={{marginBottom: 20, color: "red"}}>{errorFeatured}</p>}
            </motion.div>
            <motion.div custom={2} variants={prompts} transition={{ duration: 1, delay: 0.7 }} className="prompts">
                <Title>Most Popular Images This Month</Title>
                <PromptsList prompts={popular} isLoading={isLoadingPopular}/>
                {errorPopular && <p style={{marginBottom: 20, color: "red"}}>{errorPopular}</p>}
            </motion.div>
            <motion.div custom={3} variants={prompts} transition={{ duration: 1, delay: 1.2 }} className="prompts">
                <Title>Newest Images</Title>
                <PromptsList prompts={newest} isLoading={isLoadingNewest}/>
                {errorNewest && <p style={{marginBottom: 20, color: "red"}}>{errorNewest}</p>}
            </motion.div>
        </motion.div>
    );
};

export default HomePrompts;
