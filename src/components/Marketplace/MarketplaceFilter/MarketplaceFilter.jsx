import React, {useState} from 'react';
import "./MarketplaceFilter.css"
import {ConfigProvider, Radio, Select} from 'antd';
import Button from "../../ui/Button/Button";

const product = ['Prompts', 'Bundles', 'Apps'];
const type = ['All', 'Image', 'Text'];
const sortBy = ['Price', 'Title', 'Rating'];
const Model = ['All', 'Midjourney', 'DALL·E', 'GPT', 'Leonardo Ai', 'Llama', 'Stable Diffusion'];
const handleChange = (value) => {
    console.log(`selected ${value}`);
};


const MarketplaceFilter = () => {
    const [value1, setValue1] = useState('Prompts');
    const [value2, setValue2] = useState('All');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('All');
    const onChange1 = ({ target: { value } }) => {
        console.log('radio1 checked', value);
        setValue1(value);
    };
    const onChange2 = ({ target: { value } }) => {
        console.log('radio2 checked', value);
        setValue2(value);
    };
    const onChange3 = ({ target: { value } }) => {
        console.log('radio3 checked', value);
        setValue3(value);
    };
    const onChange4 = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setValue4(value);
    }

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
            <div className="marketplace__filter">
                <h1 className="filter__title">filter</h1>
                <div className="filters__list">
                    <div className="filter__type">
                        <h1 className="filter__name">Product</h1>
                        <Radio.Group options={product} onChange={onChange1} value={value1} />
                    </div>
                    <div className="filter__type">
                        <h1 className="filter__name">Type</h1>
                        <Radio.Group options={type} onChange={onChange2} value={value2}/>
                    </div>
                    <div className="filter__type">
                        <h1 className="filter__name">Sort by</h1>
                        <Radio.Group options={sortBy} onChange={onChange3} value={value3}/>
                    </div>
                    <div className="filter__type">
                        <h1 className="filter__name">Model</h1>
                        <Radio.Group options={Model} onChange={onChange4} value={value4}/>
                    </div>
                </div>
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
            </div>
        </ConfigProvider>
    );
};

export default MarketplaceFilter;