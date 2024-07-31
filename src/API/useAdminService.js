import axios from "axios";

export const getUsers = async (token) => {
    const response = await axios.get('/admin/admin/users');
    return response.data;
};

export const getTransactions = async (token) => {
    const response = await axios.get('/admin/admin/transactions');
    return response.data;
};

export const getDeposits = async (token) => {
    const response = await axios.get('/admin/admin/deposits');
    return response.data;
};

export const addTransaction = async (user_id, transactionData, token) => {
    const response = await axios.put(`/admin/admin/users/${user_id}/transactions`, transactionData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
};

export const addDeposit = async (user_id, depositData, token) => {
    const response = await axios.put(`/admin/admin/users/${user_id}/deposits`, depositData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
};

export const editUser = async (user_id, userData, token) => {
    const response = await axios.put(`/admin/admin/users/${user_id}`, userData, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
};