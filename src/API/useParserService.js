// API.js
import axios from "axios";

export const getPrompts = async (lastId = null) => {
    try {
        const response = await axios.get('/products/', { params: { limit: 20, last_id: lastId } });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProductDetails = async (productId) => {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
};
