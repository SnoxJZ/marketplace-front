import axios from "axios";

export const topUpBalance = async (token, userId, amount) => {
    const response = await axios.post('/payments/top-up-balance/', {
        user_id: userId,
        amount: parseFloat(amount),
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};

export const getBalance = async (user_id, token) => {
    const response = await axios.get(`/payments/show-balance/${user_id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const purchase = async (token, profileId, productId) => {
    const response = await axios.post('/transactions/purchase-product/', {
        user_id: profileId,
        product_id: productId,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};