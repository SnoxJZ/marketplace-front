import axios from "axios";

// Случайные товары
export const getRandomProducts = async (token) => {
    const response = await axios.get('/api/prompts/random_products/', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Самые популярные
export const getFeaturedPrompts = async (token) => {
    const response = await axios.get('/api/prompts/featured_prompts/', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Популярные за месяц
export const getPopularPrompts = async (token) => {
    const response = await axios.get('/api/prompts/most_popular/', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Последние
export const getNewestPrompts = async (token) => {
    const response = await axios.get('/api/prompts/newest_prompts/', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

