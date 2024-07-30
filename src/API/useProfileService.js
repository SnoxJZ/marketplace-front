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

// Загрузка изображения
export const uploadAvatar = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post('/profile/me/avatar', formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
};

// Удаление аккаунта
export const deleteAccount = async (token) => {
    try {
        const response = await axios.delete(`/profile/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
};