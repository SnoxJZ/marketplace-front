import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import './HomeMain.css'
import robotImg from '../../../assets/Home/robot.png';
import elemLeft from '../../../assets/Home/elem-left.png';
import elemRight from '../../../assets/Home/elem-right.png';
import Title from "../../ui/Title/Title";
import Card from "../../Card/Card";
import { leftElem, homeMainDesc, homeMainTitle, rightElem, homeMainProducts, homeMainRobot} from "../../../animation/AnimatedHome"
import {useMediaQuery} from "rsuite";
import {useAuth} from "../../../context/AuthContext";
import {useFetching} from "../../../hooks/useFetching";
import {getRandomProducts} from "../../../API/usePromptsService";
import PlaceholderCard from "../../Card/PlaceholderCard";

const HomeMain = () => {
    const [cards, setCards] = useState([])
    const [isMobile] = useMediaQuery('(max-width: 480px)');
    const [isTablet] = useMediaQuery('(max-width: 896px)');
    const { token } = useAuth();

    const [fetchProducts, isLoading, error] = useFetching(async () => {
        const data = await getRandomProducts(token);
        setCards(data.map(product => ({
            id: product._id,
            image_url: product.image_url,
            title: product.title,
            price: product.price,
        })));
    });
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className="home__main"
            viewport={{ once: true }}
            style={{overflow: 'hidden'}}
        >
            <motion.div variants={homeMainTitle} transition={{ duration: 1 }} className="home__main-title">ARTALLAI</motion.div>
            <motion.img variants={homeMainRobot} transition={{ duration: 1 }} src={robotImg} alt="robot" className="home__main-robot"/>
            <span className="home__elipse purple"></span>
            <motion.img variants={leftElem(isMobile)} transition={{ duration: 1 }} src={elemLeft} alt="" className="left-elem"/>
            <span className="home__elipse orange"></span>
            <motion.img variants={rightElem(isMobile)} transition={{ duration: 1 }} src={elemRight} alt="" className="right-elem"/>
            <span className="home__rectangle right-rect"></span>
            <span className="home__rectangle left-rect"></span>
            <motion.div variants={homeMainDesc(isTablet)} transition={{ duration: 1 }} className="home__main-desc">
                <Title>AI Image Products</Title>
                <p style={{margin: "26px 0"}}>Explore 130,000+ curated AI images made by expert AI creators</p>
                <div className="home__main-more">
                    <p>More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="8" viewBox="0 0 46 8" fill="none" className="home__main-arrow">
                        <path
                            d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z"
                            />
                    </svg>
                </div>
            </motion.div>
            <motion.div variants={homeMainProducts} transition={{ duration: 1 }} className="home__main-products">
                {isLoading
                ?
                    <div className="placeholder__card-group">
                        <PlaceholderCard/>
                        <PlaceholderCard/>
                        <PlaceholderCard/>
                    </div>
                    :
                    cards.map(card =>
                        <Card card={card} key={card.id}/>
                    )
                }
                {error && <p style={{marginBottom: 20, color: "red"}}>{error}</p>}
            </motion.div>
        </motion.div>
    );
};

export default HomeMain;