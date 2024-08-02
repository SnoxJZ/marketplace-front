import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const login = async (username, password) => {
        try {
            const response = await axios.post('/api/auth/token', {
                username,
                password
            }, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            setToken(response.data.access_token);
        } catch (err) {
            throw new Error('Invalid username or password');
        }
    };

    const register = async (email, nickname, password) => {
        try {
            await axios.post('/api/auth/register', {
                email,
                nickname,
                password
            }, {
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (err) {
            throw new Error('Registration failed');
        }
    };

    const logout = () => {
        setToken('');
    };

    useEffect(() => {
        const responseInterceptor = axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response && error.response.status === 401) {
                    logout();
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};