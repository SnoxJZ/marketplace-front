import React, { useState } from 'react';
import "./ModalDeposit.css";
import Modal from "../ui/Modal/Modal";
import Title from "../ui/Title/Title";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { topUpBalance } from '../../API/usePaymentsService';
import { useAuth } from "../../context/AuthContext";
import {Checkbox, Select, Spin} from "antd";
import {useMediaQuery} from "rsuite";

const ModalDeposit = ({ modalActive, setModalActive, profileId }) => {
    const [amount, setAmount] = useState("");
    const [country, setCountry] = useState()
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [isContactVisible, setIsContactVisible] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [contactData, setContactData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: ""
    });
    const { token } = useAuth();
    const [isTablet] = useMediaQuery('(max-width: 896px)');

    const handleBuyClick = () => {
        if (!amount) {
            setErrorMessage("Please enter an amount.");
            return;
        }

        if (parseFloat(amount) < 5) {
            setErrorMessage("Minimum replenishment amount 5 euros.");
            return;
        }
        setErrorMessage("");
        setIsContactVisible(true);
    };

    const handleContactChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value
        });
    };

    const handleTopUp = async () => {
        if (!isAgreed) {
            setErrorMessage("You must agree with the privacy policy and terms and conditions.");
            return;
        }

        if (!contactData.name || !contactData.surname || !contactData.email ||
            !contactData.phone || !contactData.address || !contactData.city ||
            !contactData.postalCode || !country || !amount) {
            setErrorMessage("Please fill in all the required fields.");
            return;
        }

        try {
            setIsLoading(true);
            setErrorMessage("");

            const payload = {
                amount: parseFloat(amount),
                user_id: profileId,
                name: contactData.name,
                surname: contactData.surname,
                email: contactData.email,
                phone: contactData.phone,
                address: contactData.address,
                city: contactData.city,
                postal_code: contactData.postalCode,
                country: country
            };

            const data = await topUpBalance(token, payload);

            if (data.redirect_url) {
                window.location.href = data.redirect_url;
            }
            if (data.message) {
                setMessage(data.message);
            }
        } catch (error) {
            setErrorMessage("Payment request failed. Please try again.");
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (value) => {
        setCountry(value);
    };

    const onChange = (e) => {
        setIsAgreed(e.target.checked);
    };

    const handleCancel = () => {
        setAmount("");
        setCountry(undefined);
        setContactData({
            name: "",
            surname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            postalCode: ""
        });
        setIsAgreed(false);
        setIsContactVisible(false);
        setErrorMessage("");
        setMessage("");
        setModalActive(false);
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
                <Button onClick={handleBuyClick}>Buy</Button>
            </div>
            <p className='exchange__rate'>1 Euro = 1 ART</p>
            {
                isContactVisible && (
                    <div className="modal__dep-contact">
                        <div className="modal__contact-input">
                            <div className="modal__contact-group">
                                <Input placeholder='Name' type='text' name="name" value={contactData.name} onChange={handleContactChange} />
                                <Input placeholder='Surname' type='text' name="surname" value={contactData.surname} onChange={handleContactChange} />
                            </div>
                            <div className="modal__contact-group">
                                <Input placeholder='E-mail address' type='email' name="email" value={contactData.email} onChange={handleContactChange} />
                                <Input placeholder='Phone' type='phone' name="phone" value={contactData.phone} onChange={handleContactChange} />
                            </div>
                            <div className="modal__contact-group">
                                <Select
                                    defaultValue="Country"
                                    id="select__country"
                                    style={{minWidth: isTablet ? "46%" : "48%", height: 38}}
                                    onChange={handleChange}
                                    options={[
                                        {value: 'AU', label: 'Australia'},
                                        {value: 'AT', label: 'Austria'},
                                        {value: 'BE', label: 'Belgium'},
                                        {value: 'CA', label: 'Canada'},
                                        {value: 'CY', label: 'Cyprus'},
                                        {value: 'CZ', label: 'Czech Republic'},
                                        {value: 'DK', label: 'Denmark'},
                                        {value: 'EE', label: 'Estonia'},
                                        {value: 'FI', label: 'Finland'},
                                        {value: 'FR', label: 'France'},
                                        {value: 'DE', label: 'Germany'},
                                        {value: 'GR', label: 'Greece'},
                                        {value: 'HU', label: 'Hungary'},
                                        {value: 'IS', label: 'Iceland'},
                                        {value: 'IE', label: 'Ireland'},
                                        {value: 'IL', label: 'Israel'},
                                        {value: 'IT', label: 'Italy'},
                                        {value: 'JP', label: 'Japan'},
                                        {value: 'LV', label: 'Latvia'},
                                        {value: 'LT', label: 'Lithuania'},
                                        {value: 'LU', label: 'Luxembourg'},
                                        {value: 'MT', label: 'Malta'},
                                        {value: 'NL', label: 'Netherlands'},
                                        {value: 'NZ', label: 'New Zealand'},
                                        {value: 'NO', label: 'Norway'},
                                        {value: 'PL', label: 'Poland'},
                                        {value: 'PT', label: 'Portugal'},
                                        {value: 'RO', label: 'Romania'},
                                        {value: 'SG', label: 'Singapore'},
                                        {value: 'SK', label: 'Slovakia'},
                                        {value: 'KR', label: 'South Korea'},
                                        {value: 'ES', label: 'Spain'},
                                        {value: 'SE', label: 'Sweden'},
                                        {value: 'CH', label: 'Switzerland'},
                                    ]}
                                />
                                <Input placeholder='City' type='text' name="city" value={contactData.city} onChange={handleContactChange} />
                            </div>
                            <div className="modal__contact-group">
                                <Input placeholder='Address' type='text' name="address" value={contactData.address} onChange={handleContactChange} />
                                <Input placeholder='Post Code' type='number' name="postalCode" value={contactData.postalCode} onChange={handleContactChange} />
                            </div>
                        </div>
                        <Checkbox onChange={onChange} style={{color: 'var(--main-text-color)', fontSize: 17}}>
                            I agree with&nbsp;
                            <a href="https://artallai.com/privacy" target="_blank" rel="noopener noreferrer"
                               style={{textDecoration: 'underline'}}>
                                privacy policy
                            </a>
                            &nbsp;and&nbsp;
                            <a href="https://artallai.com/tandcs" target="_blank" rel="noopener noreferrer"
                                   style={{textDecoration: 'underline'}}>
                                terms and conditions
                            </a>.
                        </Checkbox>
                        <div className="modal__contact-btns">
                            <Button borderColor={'rgb(255, 150, 6)'} onClick={handleCancel}>Cancel</Button>
                            <Button onClick={handleTopUp}>{isLoading ? <Spin/> : 'Submit'}</Button>
                        </div>
                    </div>
                )
            }
            {message && (<h1 className={'payment__message'}>{message}</h1>)}
            {errorMessage && (<h1 className={'payment__message error'}>{errorMessage}</h1>)}
        </Modal>
    );
};

export default ModalDeposit;
