import React, {useContext, useState} from 'react';
import { Checkbox, Radio } from "antd";
import { Group, Collapse, Box } from '@mantine/core';
import Input from "../../ui/Input/Input";
import {FilterContext} from "../../../context/FilterContext";

const product = ['Prompts', 'Bundles', 'Apps'];
const type = ['All', 'Image', 'Text'];
const Model = ['All', '⛵ Midjourney', '🎨 DALL·E', '🤖 GPT', '🧙‍♂️ Leonardo Ai', '🌌 Stable Diff.'];

const MarketplaceFilterList = () => {
    const { setFilterType, priceRange, setPriceRange, ratingRange, setRatingRange, setCategory } = useContext(FilterContext);
    const [value1, setValue1] = useState('Prompts');
    const [value2, setValue2] = useState('All');
    const [value3, setValue3] = useState('All');
    const [priceOpened, setPriceOpened] = useState(false);
    const [ratingOpened, setRatingOpened] = useState(false);

    const onChange1 = ({ target: { value } }) => {
        setValue1(value);
        setFilterType(value);
    };

    const onChange2 = ({ target: { value } }) => {
        setValue2(value);
        setFilterType(value);
    };

    const onChange3 = ({ target: { value } }) => {
        setValue3(value);
        setCategory(value);
    };

    const togglePrice = () => setPriceOpened((prev) => !prev);
    const toggleRating = () => setRatingOpened((prev) => !prev);

    const handlePriceChange = (e, type) => {
        const { value } = e.target;
        setPriceRange(prev => ({ ...prev, [type]: value }));
    };

    const handleRatingChange = (e, type) => {
        const { value } = e.target;
        setRatingRange(prev => ({ ...prev, [type]: value }));
    };

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
                                <Input placeholder={'from'} value={priceRange.min} onChange={(e) => handlePriceChange(e, 'min')} />
                                <Input placeholder={'to'} value={priceRange.max} onChange={(e) => handlePriceChange(e, 'max')} />
                            </div>
                        </Collapse>
                    </Box>
                    <Box maw={400}>
                        <Group justify="center" mb={5}>
                            <Checkbox onChange={toggleRating} style={{color: '#ffffff', fontSize: 16}}>Rating</Checkbox>
                        </Group>
                        <Collapse in={ratingOpened}>
                            <div className="filter__sortby-input">
                                <Input placeholder={'from 0'} value={ratingRange.min} onChange={(e) => handleRatingChange(e, 'min')} />
                                <Input placeholder={'to 5'} value={ratingRange.max} onChange={(e) => handleRatingChange(e, 'max')} />
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
