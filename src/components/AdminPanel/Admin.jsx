import React, {useState} from 'react';
import { Accordion, Placeholder } from 'rsuite';
import Contacts from "../../pages/Contacts";
import "./Admin.css"
import {Input} from "antd";
import UserInfo from "./UserInfo";
import TransactionsInfo from "./TransactionsInfo";
import DepositInfo from "./DepositInfo";

const Admin = () => {
    const [userInfo, setUserInfo] = useState([
        {id: 1, nickname: "Rona Fr", date: "2024-07-03T08:19:20", amount: 250.10},
        {id: 2, nickname: "Admin", date: "2024-07-03T11:22:43", amount: 130.65},
        {id: 3, nickname: "User", date: "2024-07-11T22:36:32", amount: 95.33},
        {id: 4, nickname: "Newbie", date: "2024-06-30T10:21:32", amount: 26.11},
        {id: 5, nickname: "Experienced", date: "2024-08-38T12:56:32", amount: 345.95},
    ])
    const [transactions, setTransactions] = useState([
        {id: 1, userId: 1, productId: 1, date: "2024-07-22T21:22:13", price: 3.45, status: "completed"},
        {id: 2, userId: 5, productId: 10, date: "2024-07-23T14:22:31", price: 7.35, status: "pending"},
        {id: 3, userId: 5, productId: 26, date: "2024-07-23T14:36:22", price: 4.59, status: "canceled"},
    ])
    const [deposits, setDeposits] = useState([
        {id: 1, userId: 1, date: "2024-07-27T20:22:13", amount: 250.10, status: "paid"},
        {id: 2, userId: 3, date: "2024-07-26T19:21:13", amount: 100.12, status: "pending"},
        {id: 3, userId: 4, date: "2024-07-25T18:20:13", amount: 30.47, status: "canceled"},
        {id: 4, userId: 5, date: "2024-07-24T17:19:13", amount: 55.66, status: "paid"},
    ])

    const [edit, setEdit] = useState(false)

    const handleEdit = () => {
        setEdit((prev) => !prev);
    }

    return (
        <div className="admin__panel">
            <Accordion bordered >
                <Accordion.Panel header="Users">
                    <div className="header-panel">
                        <h1 className="users__header-item">User ID</h1>
                        <h1 className="users__header-item">Username</h1>
                        <h1 className="users__header-item">Registration date</h1>
                        <h1 className="users__header-item" onClick={handleEdit}>Balance</h1>
                    </div>
                    {userInfo.map((item) => (
                        <UserInfo item={item} key={item.id} edit={edit}/>
                    ))}
                </Accordion.Panel>
                <Accordion.Panel header="Transactions">
                    <div className="header-panel">
                        <h1 className="users__header-item">Transaction ID</h1>
                        <h1 className="users__header-item">User ID</h1>
                        <h1 className="users__header-item">Product ID</h1>
                        <h1 className="users__header-item">Transaction date</h1>
                        <h1 className="users__header-item">Price</h1>
                        <h1 className="users__header-item">Status</h1>
                    </div>
                    {transactions.map((item) => (
                        <TransactionsInfo item={item} key={item.id} edit={edit}/>
                    ))}
                </Accordion.Panel>
                <Accordion.Panel header="Deposits">
                    <div className="header-panel">
                        <h1 className="users__header-item">Deposit ID</h1>
                        <h1 className="users__header-item">User ID</h1>
                        <h1 className="users__header-item">Deposit date</h1>
                        <h1 className="users__header-item">Amount</h1>
                        <h1 className="users__header-item">Status</h1>
                    </div>
                    {deposits.map((item) => (
                        <DepositInfo item={item} key={item.id} edit={edit}/>
                    ))}
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Admin;