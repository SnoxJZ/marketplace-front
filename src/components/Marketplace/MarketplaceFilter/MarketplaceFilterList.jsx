import React, { useState } from 'react';
import { Checkbox, Radio } from "antd";
import { Group, Text, Collapse, Box } from '@mantine/core';
import Input from "../../ui/Input/Input";

const product = ['Prompts', 'Bundles', 'Apps'];
const type = ['All', 'Image', 'Text'];
const Model = ['All', 'Midjourney', 'DALL·E', 'GPT', 'Leonardo Ai', 'Llama', 'Stable Diffusion'];

const MarketplaceFilterList = () => {
    const [value1, setValue1] = useState('Prompts');
    const [value2, setValue2] = useState('All');
    const [value3, setValue3] = useState('All');

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

    const [priceOpened, setPriceOpened] = useState(false);
    const [ratingOpened, setRatingOpened] = useState(false);

    const togglePrice = () => setPriceOpened((prev) => !prev);
    const toggleRating = () => setRatingOpened((prev) => !prev);

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
                <div className="filter__sortby">
                    <Box maw={400}>
                        <Group justify="center" mb={5}>
                            <Checkbox onChange={togglePrice} style={{color: '#ffffff', fontSize: 16}}>Price</Checkbox>
                        </Group>
                        <Collapse in={priceOpened} mb={5}>
                            <div className="filter__sortby-input">
                                <Input placeholder={'from'}/>
                                <Input placeholder={'to'}/>
                            </div>
                        </Collapse>
                    </Box>
                    <Box maw={400}>
                        <Group justify="center" mb={5}>
                            <Checkbox onChange={toggleRating} style={{color: '#ffffff', fontSize: 16}}>Rating</Checkbox>
                        </Group>
                        <Collapse in={ratingOpened}>
                            <div className="filter__sortby-input">
                                <Input placeholder={'from 0'}/>
                                <Input placeholder={'to 5'}/>
                            </div>
                        </Collapse>
                    </Box>
                </div>
            </div>
            <div className="filter__type">
                <h1 className="filter__name">Model</h1>
                <Radio.Group options={Model} onChange={onChange3} value={value3}/>
            </div>
        </div>
    );
};

export default MarketplaceFilterList;
