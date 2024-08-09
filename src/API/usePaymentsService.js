import axios from "axios";

export const topUpBalance = async (token, payload) => {
    const response = await axios.post('/api/payments/top-up-balance/', payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};

export const getBalance = async (user_id, token) => {
    const response = await axios.get(`/api/payments/show-balance/${user_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const purchase = async (token, profileId, productId) => {
    const response = await axios.post('/api/transactions/purchase-product/', {
        user_id: profileId,
        product_id: productId,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};