import React from 'react';
import {Input} from "antd";
import deleteIco from "../../../assets/Admin/delete.png";

const DepositInfo = ({item, edit, isDeleteMode, handleDeleteDeposit}) => {
    const handleDeleteClick = () => {
        handleDeleteDeposit(item.id);
    };

    return (
        <div className="info-panel">
            <Input disabled defaultValue={item.id}/>
            <Input disabled={!edit} defaultValue={item.user_id}/>
            <Input disabled={!edit} defaultValue={item.client_orderid}/>
            <Input disabled={!edit} defaultValue={item.amount}/>
            <Input disabled defaultValue={item.status}/>
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

export default DepositInfo;