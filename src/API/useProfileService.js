import axios from 'axios';

// Получение профиля
export const getProfile = async (token) => {
    const response = await axios.get('/api/profile/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Получение профиля по имени
export const getProfileByNickname = async (nickname, token) => {
    const response = await axios.get(`/api/users/${nickname}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Обновление профиля
export const updateProfile = async (token, profileData) => {
    const response = await axios.put('/api/profile/me', profileData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Смена пароля
export const changePassword = async (token, passwordData) => {
    const response = await axios.put('/api/profile/me/password', passwordData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Загрузка изображения
export const uploadAvatar = async (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post('/api/profile/me/avatar', formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
    });
};

// Удаление аккаунта
export const deleteAccount = async (token) => {
    const response = await axios.delete(`/api/profile/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response;
};