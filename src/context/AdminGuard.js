import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getProfile } from '../API/useProfileService'
import {Spin} from "antd";

const AdminGuard = ({ children }) => {
    const { token } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getProfile(token);
                if (profile.profile.role === 'admin') {
                    setIsAdmin(true);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, [token]);

    if (isLoading) {
        return <div className="spin__group"><Spin size={"large"}/></div>;
    }

    if (!isAdmin) {
        return <Navigate to="/error" replace />;
    }

    return children;
};

export default AdminGuard;