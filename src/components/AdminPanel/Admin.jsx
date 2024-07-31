import React from 'react';
import { Accordion } from 'rsuite';
import "./Admin.css"
import {useAuth} from "../../context/AuthContext";
import Transaction from "./Transaction";
import Users from "./Users";
import Deposits from "./Deposits";

const Admin = () => {
    const { token } = useAuth();

    return (
        <div className="admin__panel">
            <Accordion bordered >
                <Users token={token}/>
                <Transaction token={token}/>
                <Deposits token={token}/>
            </Accordion>
        </div>
    );
};

export default Admin;