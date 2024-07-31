import React, { useState } from 'react';
import "./ModalDeposit.css";
import Modal from "../ui/Modal/Modal";
import Title from "../ui/Title/Title";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { topUpBalance } from '../../API/usePaymentsService';
import { useAuth } from "../../context/AuthContext";
import {Spin} from "antd";

const ModalDeposit = ({ modalActive, setModalActive, profileId }) => {
    const [amount, setAmount] = useState("");
    const [redirectUrl, setRedirectUrl] = useState("");
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { token } = useAuth();

    const handleTopUp = async () => {
        try {
            setIsLoading(true)
            const data = await topUpBalance(token, profileId, amount);
            if (data.redirect_url) {
                setRedirectUrl(data.redirect_url);
            }
            if (data.message) {
                setMessage(data.message);
            }
            setIsLoading(false)
            console.log(data);
        } catch (error) {
            setIsLoading(false)
            console.error("Error topping up balance:", error);
        }
    };

    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <Title>Enter the replenishment amount €</Title>
            <div className="modal__dep-group">
                <Input
                    placeholder="€"
                    id='amount'
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <Button onClick={handleTopUp}>{isLoading ? <Spin/> : 'Buy'}</Button>
            </div>
            <p className='exchange__rate'>1 Euro = 1 ART</p>
            {message && (<h1 className={'payment__message'}>{message}</h1>)}
            {redirectUrl && (
                <div className="redirect-button">
                    <Button onClick={() => window.location.href = redirectUrl}>Proceed to Payment</Button>
                </div>
            )}
        </Modal>
    );
};

export default ModalDeposit;
