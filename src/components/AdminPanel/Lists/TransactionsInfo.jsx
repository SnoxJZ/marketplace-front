import React from 'react';
import {Input} from "antd";
import deleteIco from "../../../assets/Admin/delete.png";

const TransactionsInfo = ({item, edit, isDeleteMode, handleDeleteTransaction}) => {
    const handleDeleteClick = () => {
        handleDeleteTransaction(item.id);
    };

    return (
        <div className="info-panel">
            <Input disabled defaultValue={item.id}/>
            <Input disabled={!edit} defaultValue={item.product_id}/>
            <Input disabled={!edit} defaultValue={item.user_id}/>
            <Input disabled={!edit} defaultValue={item.product_name}/>
            <Input disabled={!edit} defaultValue={item.price}/>
            <Input disabled={!edit} defaultValue={item.status}/>
            <Input disabled={!edit} defaultValue={item.created_at}/>
            {isDeleteMode && (
                <button className="delete__btn-adm">
                    <img src={deleteIco} alt="delete" onClick={handleDeleteClick}/>
                </button>
            )
            }
        </div>
    );
};

export default TransactionsInfo;