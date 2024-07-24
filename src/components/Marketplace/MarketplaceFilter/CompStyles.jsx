import React from 'react';
import {ConfigProvider} from "antd";

const CompStyles = ( {children} ) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Radio: {
                        colorText: '#ffffff',
                        borderRadius: 0,
                        fontSize: "16px",
                        colorBgContainer: 'transparent',
                        colorBorder: '#D01FDF',
                        colorPrimary: '#D01FDF',
                        radioSize: 10,
                        dotSize: 0,
                    },
                    Select: {
                        colorText: '#ffffff',
                        fontSize: "20px",
                        optionPadding: "5px 12px",
                        selectorBg: 'transparent',
                        colorBgElevated: "#000000",
                        colorBorder: "#D01FDF",
                        optionSelectedBg: '#202020',
                        optionSelectedColor: '#ffffff',
                        colorPrimary: "#202020",
                        colorTextPlaceholder: '#8e8d8d',
                        colorPrimaryHover: '#4a0d51',
                    },
                    Checkbox: {
                        colorText: '#ffffff',
                        colorBgContainer: 'transparent',
                        colorBorder: '#D01FDF',
                        colorPrimary: '#D01FDF',
                        colorPrimaryHover: 'none',
                        controlInteractiveSize: 10,
                        borderRadiusSM: 0,
                    },
                }
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default CompStyles;