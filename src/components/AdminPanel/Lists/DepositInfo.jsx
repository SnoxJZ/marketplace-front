import React from 'react';
import {Input} from "antd";

const DepositInfo = ({item, edit}) => {
    return (
        <div className="info-panel">
            <Input disabled defaultValue={item.id}/>
            <Input disabled={!edit} defaultValue={item.user_id}/>
            <Input disabled={!edit} defaultValue={item.client_orderid}/>
            <Input disabled={!edit} defaultValue={item.amount}/>
            <Input disabled defaultValue={item.status}/>
            <Input disabled={!edit} defaultValue={item.created_at}/>
        </div>
    );
};

export default DepositInfo;