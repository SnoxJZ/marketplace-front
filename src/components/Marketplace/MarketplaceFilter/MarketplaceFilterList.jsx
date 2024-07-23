import React, {useState} from 'react';
import {Radio} from "antd";

const product = ['Prompts', 'Bundles', 'Apps'];
const type = ['All', 'Image', 'Text'];
const sortBy = ['Price', 'Title', 'Rating'];
const Model = ['All', 'Midjourney', 'DALL·E', 'GPT', 'Leonardo Ai', 'Llama', 'Stable Diffusion'];

const MarketplaceFilterList = () => {

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
        <div className="filters__list">
            <div className="filter__type">
                <h1 className="filter__name">Product</h1>
                <Radio.Group options={product} onChange={onChange1} value={value1}/>
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
    );
};

export default MarketplaceFilterList;