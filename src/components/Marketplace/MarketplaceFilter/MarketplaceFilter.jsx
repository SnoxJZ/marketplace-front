import React, {useEffect, useRef, useState} from 'react';
import "./MarketplaceFilter.css"
import {Select} from 'antd';
import Button from "../../ui/Button/Button";
import {motion} from 'framer-motion';
import MarketplaceFilterList from "./MarketplaceFilterList";
import CompStyles from "../../../providers/CompStyles";
import Title from "../../ui/Title/Title";
import filter from "../../../assets/Marketplace/filter.png";

const marketplaceFilter = {
    hidden: {
        x: -350,
    },
    visible: {
        x: 0,
    },
};

const handleChange = (value) => {
    console.log(`selected ${value}`);
};


const MarketplaceFilter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);

    const handleFilter = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={filterRef}>
            <div className="filter__handler">
                <Title color="rgba(208, 31, 223, 1)">Filter</Title>
                <img src={filter} alt="filter btn" onClick={handleFilter}/>
            </div>
            <motion.div
                className={`marketplace__filter-wrapper ${isOpen ? 'show' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                <div className="marketplace__filter-block">
                    <motion.div
                        className="marketplace__filter"
                        variants={marketplaceFilter}
                        transition={{duration: 0.7}}
                    >
                        <h1 className="filter__title">filter</h1>
                        <MarketplaceFilterList/>
                        <div className="category__filter">
                            <Select
                                defaultValue="all"
                                style={{width: 165,}}
                                onChange={handleChange}
                                options={[
                                    {value: 'all', label: 'All'},
                                    {value: '3d', label: '3D'},
                                    {value: 'anime', label: 'Anime'},
                                    {value: 'cartoon', label: 'Cartoon'},
                                    {value: 'art', label: 'Art'},
                                    {value: 'logo', label: 'Logo'},
                                    {value: 'mockup', label: 'Mockup'},
                                    {value: 'nature', label: 'Nature'},
                                    {value: 'people', label: 'People'},
                                ]}
                            />
                        </div>
                        <div className="filter__btns">
                            <Button>Save</Button>
                            <Button borderColor={'rgb(255, 150, 6)'}>Clear</Button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default MarketplaceFilter;