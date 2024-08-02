import axios from "axios";

export const getUsers = async (token) => {
    const response = await axios.get('/api/admin/admin/users');
    return response.data;
};

export const getTransactions = async (token) => {
    const response = await axios.get('/api/admin/admin/transactions');
    return response.data;
};

export const getDeposits = async (token) => {
    const response = await axios.get('/api/admin/admin/deposits');
    return response.data;
};


export const addTransaction = async (user_id, transactionData, token) => {
    const response = await axios.put(`/api/admin/admin/users/${user_id}/transactions`, transactionData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
};

export const addDeposit = async (user_id, depositData, token) => {
    const response = await axios.put(`/api/admin/admin/users/${user_id}/deposits`, depositData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
};

export const editUser = async (user_id, userData, token) => {
    const response = await axios.put(`/api/admin/admin/users/${user_id}`, userData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
};


export const deleteUser = async (user_id, token) => {
    const response = await axios.delete(`/api/admin/admin/users/${user_id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteDeposit = async (deposit_id, token) => {
    const response = await axios.delete(`/api/admin/admin/deposits/${deposit_id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteTransaction = async (transaction_id, token) => {
    const response = await axios.delete(`/api/admin/admin/transactions/${transaction_id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};