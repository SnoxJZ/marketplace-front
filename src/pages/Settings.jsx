import React from 'react';
import Title from "../components/ui/Title/Title";
import "../components/Settings/Settings.css";
import SettingsFields from "../components/Settings/SettingsFields";
import SettingsUpload from "../components/Settings/SettingsUpload";
import SettingsNotification from "../components/Settings/SettingsNotification";
import Button from "../components/ui/Button/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { deleteAccount } from '../API/useProfileService'; // Импортируем функцию из api.js

const Settings = () => {
    const { logout, token } = useAuth();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate('/');
    };

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteAccount(token);
            if (response.status === 200) {
                logout();
                navigate('/');
            } else {
                console.error("Failed to delete account", response.data);
            }
        } catch (error) {
            console.error("Error deleting account", error);
        }
    };

    return (
        <div className="settings">
            <div className="settings__header">
                <Title fontSize="48px">Settings</Title>
            </div>
            <div className="acc_settings">
                <h1 className="settings__subtitle">Account</h1>
                <div className="account__settings">
                    <SettingsFields/>
                    <SettingsUpload/>
                </div>
                <SettingsNotification/>
                <div className="settings__btns">
                    <div className="settings__btns-group">
                        <Button onClick={handleLogout}>Logout</Button>
                        <Button borderColor="rgba(237, 67, 67, 1)" onClick={handleDeleteAccount}>Delete Account</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
