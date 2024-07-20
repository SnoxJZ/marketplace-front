import React from 'react';
import Title from "../components/ui/Title/Title";
import "../components/Settings/Settings.css"
import SettingsFields from "../components/Settings/SettingsFields";
import SettingsUpload from "../components/Settings/SettingsUpload";
import {Radio} from "antd";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settings__header">
                <Title fontSize="48px">Settings</Title>
            </div>
            <form action="" className="acc_settings">
                <h1 className="settings__subtitle">Account</h1>
                <div className="account__settings">
                    <SettingsFields/>
                    <SettingsUpload/>
                </div>
                <div className="notification_setting">
                    <h1 className="settings__text">Notification</h1>
                    <Radio>New Messages</Radio>
                </div>
            </form>
        </div>
    );
};

export default Settings;