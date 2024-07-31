import React from 'react';
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";

const EditUsersModal = ({isModalUser, setIsModalUser, handleSubmitUser, userData, handleInputChangeUsers}) => {
    return (
        <Modal active={isModalUser} setActive={setIsModalUser}>
            <form onSubmit={handleSubmitUser} className="add__item-form">
                <Input
                    type="text"
                    name="user_id"
                    placeholder="User ID"
                    value={userData.user_id}
                    onChange={handleInputChangeUsers}
                />
                <Input
                    type="text"
                    name="nickname"
                    placeholder="Username"
                    value={userData.nickname}
                    onChange={handleInputChangeUsers}
                />
                <Input
                    type="text"
                    name="registration_date"
                    placeholder="Registration Date"
                    value={userData.registration_date}
                    onChange={handleInputChangeUsers}
                />
                <Button type="submit" borderColor={'#FF8C06'}>Submit</Button>
            </form>
        </Modal>
    );
};

export default EditUsersModal;