import React from 'react';
import Title from "../components/ui/Title/Title";
import "../components/Settings/Settings.css"
import SettingsFields from "../components/Settings/SettingsFields";
import SettingsUpload from "../components/Settings/SettingsUpload";
import SettingsNotification from "../components/Settings/SettingsNotification";
import Button from "../components/ui/Button/Button";

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
                    <SettingsNotification/>
                    <div className="settings__btns">
                        <Button>Save Settings</Button>
                        <div className="settings__btns-group">
                            <Button>Logout</Button>
                            <Button borderColor="rgba(237, 67, 67, 1)">Delete Account</Button>
                        </div>
                    </div>
                </form>
            </div>

    );
};

export default Settings;