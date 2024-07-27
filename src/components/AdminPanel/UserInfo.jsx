import React from 'react';
import {Input} from "antd";

const UserInfo = ({item, edit}) => {
    return (
        <div className="info-panel">
            <Input disabled={!edit} defaultValue={item.id}/>
            <Input disabled={!edit} defaultValue={item.nickname}/>
            <Input disabled={!edit} defaultValue={item.date}/>
            <Input disabled={!edit} defaultValue={item.amount}/>
        </div>
    );
};

export default UserInfo;