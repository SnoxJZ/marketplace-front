import React, {useEffect, useState} from 'react';
import "./Admin.css"
import {message, Spin} from "antd";
import DepositInfo from "./Lists/DepositInfo";
import {Accordion} from "rsuite";
import {useFetching} from "../../hooks/useFetching";
import {addDeposit, deleteDeposit, getDeposits} from "../../API/useAdminService";
import AddDepositModal from "./Modals/AddDepositModal";

const Deposits = ({token}) => {
    const [deposits, setDeposits] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteMode, setIsDeleteMode] = useState(false);

    const [depositData, setDepositData] = useState({
        amount: '',
        status: '',
        client_orderid: '',
        created_at: '',
        updated_at: ''
    });

    const [fetchDeposits, isLoadingD, errorD] = useFetching(async () => {
        const data = await getDeposits(token);
        setDeposits(data)
    });
    useEffect(() => {
        fetchDeposits();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDepositData({
            ...depositData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addDeposit(depositData.user_id, [depositData], token);
            message.success('Transaction added:', response);
            setIsModalOpen(false);
            fetchDeposits();
        } catch (error) {
            console.error('Failed to add transaction:', error);
        }
    };

    const handleDeleteDeposit = async (deposit_id) => {
        try {
            await deleteDeposit(deposit_id, token);
            message.success('User deleted successfully');
            fetchDeposits();
        } catch (error) {
            console.error('Failed to delete user:', error);
            message.error('Failed to delete user');
        }
    };

    return (
        <Accordion.Panel header="Deposits">
            <div className="header-panel">
                <h1 className="users__header-item" onClick={() => setIsDeleteMode(!isDeleteMode)}>Deposit ID</h1>
                <h1 className="users__header-item">User ID</h1>
                <h1 className="users__header-item">Client Order ID</h1>
                <h1 className="users__header-item">Amount</h1>
                <h1 className="users__header-item">Status</h1>
                <h1 className="users__header-item" onClick={() => setIsModalOpen(true)}>Deposit date</h1>
                {isDeleteMode && (
                    <h1 className="users__header-item">Delete</h1>
                )}
            </div>
            {isLoadingD
                ?
                <Spin/>
                :
                deposits.map((item) => (
                    <DepositInfo item={item} key={item.id} isDeleteMode={isDeleteMode} handleDeleteDeposit={handleDeleteDeposit}/>
                ))
            }
            {errorD && <p style={{marginTop: 20, color: "red"}}>{errorD}</p>}

            <AddDepositModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                depositData={depositData}
            />
        </Accordion.Panel>
    );
};

export default Deposits;