import React from 'react';
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";

const AddDepositModal = ({isModalOpen, setIsModalOpen, handleSubmit, handleInputChange, depositData}) => {
    return (
        <Modal active={isModalOpen} setActive={setIsModalOpen}>
            <form onSubmit={handleSubmit} className="add__item-form">
                <Input
                    type="text"
                    name="user_id"
                    placeholder="User ID"
                    value={depositData.user_id}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="amount"
                    placeholder="Deposit Sum"
                    value={depositData.amount}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={depositData.status}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="client_orderid"
                    placeholder="Client Order ID"
                    value={depositData.client_orderid}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="created_at"
                    placeholder="Create Date"
                    value={depositData.created_at}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="updated_at"
                    placeholder="Update Date"
                    value={depositData.updated_at}
                    onChange={handleInputChange}
                />
                <Button type="submit" borderColor={'#FF8C06'}>Submit</Button>
            </form>
        </Modal>
    );
};

export default AddDepositModal;