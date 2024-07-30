import axios from "axios";

// Случайные товары
export const getRandomProducts = async (token) => {
    try {
        const response = await axios.get('/prompts/random_products/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch random products", error);
        throw error;
    }
};

// Самые популярные
export const getFeaturedPrompts = async (token) => {
    try {
        const response = await axios.get('/prompts/featured_prompts/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch random products", error);
        throw error;
    }
};

// Популярные за месяц
export const getPopularPrompts = async (token) => {
    try {
        const response = await axios.get('/prompts/most_popular/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch random products", error);
        throw error;
    }
};

// Последние
export const getNewestPrompts = async (token) => {
    try {
        const response = await axios.get('/prompts/newest_prompts/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch random products", error);
        throw error;
    }
};

