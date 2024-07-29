import React, {useState} from 'react';
import "./Settings.css";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {updateProfile, changePassword} from '../../API/useProfileService';
import { useAuth } from "../../context/AuthContext"

const SettingsFields = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [old_password, setOldPassword] = useState('');
    const [new_password, setNewPassword] = useState('');
    const { token } = useAuth();

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            const profileData = { email, nickname };
            await updateProfile(token, profileData);
            alert('Profile updated successfully!');
        } catch (error) {
            alert('Failed to update profile.');
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const passwordData = { old_password, new_password }
            await changePassword(token, passwordData);
            alert('Password changed successfully!');
        } catch (error) {
            alert('Failed to change password.');
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
        </div>
    );
};

export default SettingsFields;
