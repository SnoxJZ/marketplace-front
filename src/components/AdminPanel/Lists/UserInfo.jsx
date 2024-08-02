import React from 'react';
import {Input} from "antd";
import deleteIco from "../../../assets/Admin/delete.png";

const UserInfo = ({item, isDeleteMode, handleDeleteUser}) => {
    const handleDeleteClick = () => {
        handleDeleteUser(item.id);
    };

    return (
        <div className="info-panel">
            <Input disabled defaultValue={item.id}/>
            <Input disabled defaultValue={item.nickname}/>
            <Input disabled defaultValue={item.registration_date}/>
            <Input disabled defaultValue={item.balance}/>
            {isDeleteMode && (
                <button className="delete__btn-adm">
                    <img src={deleteIco} alt="delete" onClick={handleDeleteClick}/>
                </button>
    )
}
</div>
)
    ;
};

export default UserInfo;