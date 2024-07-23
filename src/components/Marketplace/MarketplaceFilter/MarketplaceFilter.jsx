import React from 'react';
import "./MarketplaceFilter.css"
import {ConfigProvider, Select} from 'antd';
import Button from "../../ui/Button/Button";
import {motion} from 'framer-motion';
import MarketplaceFilterList from "./MarketplaceFilterList";

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


    return (
        <ConfigProvider
            theme={{
                components: {
                    Radio: {
                        colorText: '#ffffff',
                        borderRadius: 0,
                        fontSize: "16px",
                        colorBgContainer: 'transparent',
                        colorBorder: '#D01FDF',
                        colorPrimary: '#D01FDF',
                        radioSize: 10,
                        dotSize: 0,
                    },
                    Select: {
                        colorText: '#ffffff',
                        fontSize: "20px",
                        optionPadding: "5px 12px",
                        selectorBg: 'transparent',
                        colorBgElevated: "#000000",
                        colorBorder: "#D01FDF",
                        optionSelectedBg: '#202020',
                        optionSelectedColor: '#ffffff',
                        colorPrimary: "#202020",
                        colorTextPlaceholder: '#8e8d8d',
                        colorPrimaryHover: '#4a0d51',
                    },
                }
            }}
        >
            <motion.div
                className="marketplace__filter-wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="marketplace__filter-block">
                    <motion.div
                        className="marketplace__filter"
                        variants={marketplaceFilter}
                        transition={{ duration: 0.7 }}
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
        </ConfigProvider>
    );
};

export default MarketplaceFilter;