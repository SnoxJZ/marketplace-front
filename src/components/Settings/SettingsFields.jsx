import React from 'react';
import "./Settings.css"
import Input from "../ui/Input/Input";

const SettingsFields = () => {
    return (
        <div className="settings__fields-wrapper">
            <div className="settings__input-group">
                <div className="settings__field">
                    <h1 className="settings__text">Username</h1>
                    <Input type="text"/>
                </div>
                <div className="settings__field">
                    <h1 className="settings__text">E-mail</h1>
                    <Input type="email"/>
                </div>
            </div>
            <div className="settings__input-group">
                <div className="settings__field">
                    <h1 className="settings__text">Old password</h1>
                    <Input type="password"/>
                </div>
                <div className="settings__field">
                    <h1 className="settings__text">New password</h1>
                    <Input type="password"/>
                </div>
            </div>
        </div>
    );
};

export default SettingsFields;