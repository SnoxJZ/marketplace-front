import axios from 'axios';

// Получение профиля
export const getProfile = async (token) => {
    try {
        const response = await axios.get('/profile/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching profile", error);
        throw error;
    }
};

// Обновление профиля
export const updateProfile = async (token, profileData) => {
    try {
        const response = await axios.put('/profile/me', profileData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating profile", error);
        throw error;
    }
};

// Смена пароля
export const changePassword = async (token, passwordData) => {
    try {
        const response = await axios.put('/profile/me/password', passwordData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error changing password", error);
        throw error;
    }
};
