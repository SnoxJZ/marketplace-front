import React from 'react';
import {Input} from "antd";

const TransactionsInfo = ({item, edit}) => {
    return (
        <div className="info-panel">
            <Input disabled defaultValue={item.id}/>
            <Input disabled={!edit} defaultValue={item.product_id}/>
            <Input disabled={!edit} defaultValue={item.user_id}/>
            <Input disabled={!edit} defaultValue={item.product_name}/>
            <Input disabled={!edit} defaultValue={item.price}/>
            <Input disabled={!edit} defaultValue={item.status}/>
            <Input disabled={!edit} defaultValue={item.created_at}/>
        </div>
    );
};

export default TransactionsInfo;