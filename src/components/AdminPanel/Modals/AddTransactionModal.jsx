import React from 'react';
import Modal from "../../ui/Modal/Modal";
import Input from "../../ui/Input/Input";
import "../Admin.css"
import Button from "../../ui/Button/Button";

const AddTransactionModal = ({isModalOpen, setIsModalOpen, handleSubmit, transactionData, handleInputChange}) => {
    return (
        <Modal active={isModalOpen} setActive={setIsModalOpen}>
            <form onSubmit={handleSubmit} className="add__item-form">
                <Input
                    type="text"
                    name="user_id"
                    placeholder="User ID"
                    value={transactionData.user_id}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="product_id"
                    placeholder="Product ID"
                    value={transactionData.product_id}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="product_name"
                    placeholder="Product Name"
                    value={transactionData.product_name}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={transactionData.price}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="status"
                    placeholder="Status"
                    value={transactionData.status}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="created_at"
                    placeholder="Created Transaction Date"
                    value={transactionData.created_at}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="updated_at"
                    placeholder="Updated Transaction Date"
                    value={transactionData.updated_at}
                    onChange={handleInputChange}
                />
                <Button type="submit" borderColor={'#FF8C06'}>Submit</Button>
            </form>
        </Modal>
    );
};

export default AddTransactionModal;