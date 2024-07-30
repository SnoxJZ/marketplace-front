import React, {useEffect, useState} from 'react';
import "./Settings.css";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {updateProfile, changePassword, getProfile} from '../../API/useProfileService';
import { useAuth } from "../../context/AuthContext"

const SettingsFields = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [old_password, setOldPassword] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const { token } = useAuth();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await getProfile(token);
                setEmail(profileData.email);
                setNickname(profileData.nickname);
            } catch (error) {
                console.error("Failed to load profile data", error);
            }
        };
        fetchProfile();
    }, [token]);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            const profileData = { email, nickname };
            await updateProfile(token, profileData);
            setMessage('Profile updated successfully!');
        } catch (error) {
            setErrMessage('Failed to update profile.');
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const passwordData = { old_password, new_password }
            const response = await changePassword(token, passwordData);
            setMessage(response.message);
            setErrMessage('');
        } catch (error) {
            setMessage('');
            if (error.response && error.response.data && error.response.data.detail) {
                setErrMessage(error.response.data.detail);
            } else {
                setErrMessage('Failed to change password.');
            }
        }
    };

    return (
        <div className="settings__fields-wrapper">
            <form className="update__info-form" onSubmit={handleProfileUpdate}>
                <div className="settings__input-group">
                    <div className="settings__field">
                        <h1 className="settings__text">Username</h1>
                        <Input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    </div>
                    <div className="settings__field">
                        <h1 className="settings__text">E-mail</h1>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <Button type="submit">Save Info</Button>
            </form>
            <form className="update__info-form" onSubmit={handleChangePassword}>
                <div className="settings__input-group">
                    <div className="settings__field">
                        <h1 className="settings__text">Old password</h1>
                        <Input type="password" value={old_password} onChange={(e) => setOldPassword(e.target.value)} />
                    </div>
                    <div className="settings__field">
                        <h1 className="settings__text">New password</h1>
                        <Input type="password" value={new_password} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                </div>
                <Button type="submit">Save Password</Button>
            </form>
            {message && <p style={{color: "green"}}>{message}</p>}
            {errMessage && <p style={{color: "red"}}>{errMessage}</p>}
        </div>
    );
};

export default SettingsFields;
