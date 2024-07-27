import React from 'react';
import {Input} from "antd";

const DepositInfo = ({item, edit}) => {
    return (
        <div className="info-panel">
            <Input disabled={!edit}  defaultValue={item.id}/>
            <Input disabled={!edit} defaultValue={item.userId}/>
            <Input disabled={!edit} defaultValue={item.date}/>
            <Input disabled={!edit} defaultValue={item.amount}/>
            <Input disabled={!edit} defaultValue={item.status}/>
        </div>
    );
};

export default DepositInfo;