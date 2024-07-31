import React from 'react';
import {Input} from "antd";

const UserInfo = ({item, edit}) => {
    return (
        <div className="info-panel">
            <Input disabled defaultValue={item.id}/>
            <Input disabled={!edit} defaultValue={item.nickname}/>
            <Input disabled={!edit} defaultValue={item.registration_date}/>
            <Input disabled defaultValue={item.balance}/>
        </div>
    );
};

export default UserInfo;