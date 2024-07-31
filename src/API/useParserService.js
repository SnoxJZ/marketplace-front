import axios from "axios";

export const getProductDetails = async (productId) => {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
};

export const fetchProductsByPrice = async (page, minPrice, maxPrice) => {
    try {
        const response = await axios.get("/products/filter_by_price/", {
            params: {
                page,
                limit: 30,
                min_price: minPrice,
                max_price: maxPrice,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching products by price:", error);
        throw error;
    }
};

export const fetchProductsByRating = async (page, minRating, maxRating) => {
    try {
        const response = await axios.get("/products/filter_by_rating/", {
            params: {
                page,
                limit: 30,
                min_rating: minRating,
                max_rating: maxRating,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching products by rating:", error);
        throw error;
    }
};

export const fetchProductsByCategory = async (page, category) => {
    try {
        const response = await axios.get("/products/filter_by_category/", {
            params: {
                page,
                limit: 30,
                category: category === 'All' ? undefined : category,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        throw error;
    }
};

export const fetchProductsByTitle = async (page, title) => {
    try {
        const response = await axios.get("/products/filter_by_title/", {
            params: {
                page,
                limit: 30,
                title,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching products by title:", error);
        throw error;
    }
};

export const addReview = async (reviewData) => {
    try {
        const response = await axios.post(`/products/${reviewData.product_id}/add_review/`, reviewData);
        return response.data;
    } catch (error) {
        console.error("Failed to add review:", error.response ? error.response.data : error.message);
        throw error;
    }
};