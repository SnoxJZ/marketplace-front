import React, { useState } from 'react';
import Modal from "../../ui/Modal/Modal";
import Title from "../../ui/Title/Title";
import "./ModalGet.css"
import {Select, Spin} from "antd";
import Button from "../../ui/Button/Button";
import { useAuth } from "../../../context/AuthContext";

const ModalGet = ({ modalActive, setModalActive, product }) => {
    const [size, setSize] = useState('500x250');
    const [format, setFormat] = useState('png');
    const [isLoading, setIsLoading] = useState(false)
    const { token } = useAuth();

    const handleChangeSize = (value) => {
        setSize(value);
    };

    const handleChangeFormat = (value) => {
        setFormat(value);
    };

    const handleDownload = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`/api/transactions/download-product/${product.id}?extension=${format}&resolution=${size}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to download the file');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `${product.title}.${format}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            setModalActive(false);
            setIsLoading(false)
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };

    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <div className="modal__get-header">
                <Title>{product.title}</Title>
                <p>{product.category}</p>
            </div>
            <div className="modal__get-main">
                <div className="modal__select-group">
                    <Select
                        defaultValue="500x250"
                        style={{ width: 165 }}
                        onChange={handleChangeSize}
                        options={[
                            { value: '500x250', label: '500x250' },
                            { value: '800x400', label: '800x400' },
                            { value: '1280x720', label: '1280x720' },
                            { value: '1920x1080', label: '1920x1080' },
                            { value: '2560x1440', label: '2560x1440' },
                            { value: '3840x2160', label: '3840x2160' },
                        ]}
                    />
                    <Select
                        defaultValue="png"
                        style={{ width: 165 }}
                        onChange={handleChangeFormat}
                        options={[
                            { value: 'png', label: 'png' },
                            { value: 'jpeg', label: 'jpeg' },
                            { value: 'webp', label: 'webp' },
                        ]}
                    />
                </div>
                <Button id='download__btn' onClick={handleDownload}>{isLoading ? <Spin/> : 'Generate'}</Button>
            </div>
        </Modal>
    );
};

export default ModalGet;
