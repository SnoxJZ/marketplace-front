import React, {useEffect, useState} from 'react';
import {message, Spin} from "antd";
import UserInfo from "./Lists/UserInfo";
import {Accordion} from "rsuite";
import {useFetching} from "../../hooks/useFetching";
import {editUser, getUsers} from "../../API/useAdminService";
import EditUsersModal from "./Modals/EditUsersModal";

const Users = ({token}) => {
    const [userInfo, setUserInfo] = useState([]);
    const [isModalUser, setIsModalUser] = useState(false);

    const [userData, setUserData] = useState({
        nickname: '',
        registration_date: '',
    });

    const [fetchUsers, isLoading, error] = useFetching(async () => {
        const data = await getUsers(token);
        setUserInfo(data)
    });
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleInputChangeUsers = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmitUser = async (e) => {
        e.preventDefault();
        try {
            const response = await editUser(userData.user_id, userData, token);
            message.success('User edited:', response);
            setIsModalUser(false);
            fetchUsers();
        } catch (error) {
            console.error('Failed to add transaction:', error);
        }
    };

    return (
        <Accordion.Panel header="Users">
            <div className="header-panel">
                <h1 className="users__header-item">User ID</h1>
                <h1 className="users__header-item">Username</h1>
                <h1 className="users__header-item">Registration date</h1>
                <h1 className="users__header-item" onClick={() => setIsModalUser(true)}>Balance</h1>
            </div>
            {isLoading
                ?
                <Spin/>
                :
                userInfo.map((item) => (
                    <UserInfo item={item} key={item.id}/>
                ))
            }
            {error && <p style={{marginTop: 20, color: "red"}}>{error}</p>}

            <EditUsersModal
                setIsModalUser={setIsModalUser}
                isModalUser={isModalUser}
                handleSubmitUser={handleSubmitUser}
                userData={userData}
                handleInputChangeUsers={handleInputChangeUsers}
            />
        </Accordion.Panel>
    );
};

export default Users;