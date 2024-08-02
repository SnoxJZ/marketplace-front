import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Flex, message, Upload } from 'antd';
import "./Settings.css"
import Title from "../ui/Title/Title";
import Button from "../ui/Button/Button";
import {useAuth} from "../../context/AuthContext";
import {uploadAvatar} from "../../API/useProfileService";

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const SettingsUpload = () => {

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [file, setFile] = useState(null);
    const { token } = useAuth();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
                setFile(info.file.originFileObj);
            });
        }
    };

    const handleUpload = async () => {
        if (!file) {
            message.error('Please select an image first.');
            return;
        }
        try {
            await uploadAvatar(file, token);
            message.success('Avatar uploaded successfully!');
        } catch (error) {
            message.error('Failed to upload avatar.');
        }
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
                color: '#ffffff',
                fontSize: '42px'
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 0,
                }}
            >
            </div>
        </button>
    );

    return (
        <div className="profile__picture">
            <div className="picture__upload">
                <Flex gap="middle" wrap>
                    <Upload
                        name="file"
                        listType="picture-circle"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="/api/profile/me/avatar"
                        headers={{
                            Authorization: `Bearer ${token}`
                        }}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}

                    >
                        {imageUrl ? (
                            <img
                                className="import__avatar"
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </Flex>
            </div>
            <div className="picture__save">
                <div className="picture__save-text">
                    <Title color='rgba(208, 31, 223, 1)'>Profile Picture</Title>
                    <h1 className="settings__text mob">Upload a picture to display on your profile.</h1>
                </div>
                <Button onClick={handleUpload}>Import Image</Button>
            </div>
        </div>
    );
};

export default SettingsUpload;