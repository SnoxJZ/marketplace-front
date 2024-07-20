import React from 'react';
import {Checkbox, ConfigProvider} from "antd";

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const SettingsNotification = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Checkbox: {
                        colorText: '#ffffff',
                        colorBgContainer: 'transparent',
                        colorBorder: '#D01FDF',
                        colorPrimary: '#D01FDF',
                        colorPrimaryHover: '#6f127b'
                    },
                }
            }}
        >
            <div className="notification_setting">
                <h1 className="settings__text">Notification</h1>
                <Checkbox onChange={onChange} style={{color: '#ffffff', fontSize: 17}}>New Messages</Checkbox>
            </div>
        </ConfigProvider>
    );
};

export default SettingsNotification;