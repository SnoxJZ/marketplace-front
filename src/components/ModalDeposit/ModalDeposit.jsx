import React from 'react';
import "./ModalDeposit.css"
import Modal from "../ui/Modal/Modal";
import Title from "../ui/Title/Title";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";

const ModalDeposit = ({modalActive, setModalActive}) => {
    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <Title>Enter the replenishment amount €</Title>
            <div className="modal__dep-group">
                <Input placeholder="€" id='amount' type="number"/>
                <Button>Buy</Button>
            </div>
            <p className='exchange__rate'>1 Euro = 1 ART</p>
        </Modal>
    );
};

export default ModalDeposit;