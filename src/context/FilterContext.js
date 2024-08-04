import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filterType, setFilterType] = useState('Prompts');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [ratingRange, setRatingRange] = useState({ min: '', max: '' });
    const [category, setCategory] = useState('All');
    const [shouldFilter, setShouldFilter] = useState(false);
    const [page, setPage] = useState(1);

    const clearFilters = () => {
        setFilterType('Prompts');
        setPriceRange({ min: '', max: '' });
        setRatingRange({ min: '', max: '' });
        setCategory('All');
        setShouldFilter(true);
    };

    return (
        <FilterContext.Provider value={{
            filterType,
            setFilterType,
            priceRange,
            setPriceRange,
            ratingRange,
            setRatingRange,
            category,
            setCategory,
            shouldFilter,
            setShouldFilter,
            page,
            setPage,
            clearFilters
        }}>
            {children}
        </FilterContext.Provider>
    );
};