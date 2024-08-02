import axios from "axios";

export const getProductDetails = async (productId) => {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
};

export const fetchProductsByPrice = async (page, minPrice, maxPrice) => {
    const response = await axios.get("/api/products/filter_by_price/", {
        params: {
            page,
            limit: 30,
            min_price: minPrice,
            max_price: maxPrice,
        },
    });
    return response.data;
};

export const fetchProductsByRating = async (page, minRating, maxRating) => {
    const response = await axios.get("/api/products/filter_by_rating/", {
        params: {
            page,
            limit: 30,
            min_rating: minRating,
            max_rating: maxRating,
        },
    });
    return response.data;
};

export const fetchProductsByCategory = async (page, category) => {
    const response = await axios.get("/api/products/filter_by_category/", {
        params: {
            page,
            limit: 30,
            category: category === 'All' ? undefined : category,
        },
    });
    return response.data;
};

export const fetchProductsByTitle = async (page, title) => {
    const response = await axios.get("/api/products/filter_by_title/", {
        params: {
            page,
            limit: 30,
            title,
        },
    });
    return response.data;
};

export const addReview = async (reviewData) => {
    const response = await axios.post(`/api/products/${reviewData.product_id}/add_review/`, reviewData);
    return response.data;
};