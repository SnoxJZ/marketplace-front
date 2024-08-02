import React, {useEffect, useState} from 'react';
import "./Admin.css"
import {message, Spin} from "antd";
import TransactionsInfo from "./Lists/TransactionsInfo";
import {Accordion} from "rsuite";
import {useFetching} from "../../hooks/useFetching";
import {addTransaction, deleteTransaction, deleteUser, getTransactions} from "../../API/useAdminService";
import AddTransactionModal from "./Modals/AddTransactionModal";

const Transaction = ({token}) => {
    const [transactions, setTransactions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteMode, setIsDeleteMode] = useState(false);

    const [transactionData, setTransactionData] = useState({
        product_id: '',
        product_name: '',
        price: '',
        status: '',
        created_at: '',
        updated_at: ''
    });

    const [fetchTransactions, isLoadingT, errorT] = useFetching(async () => {
        const data = await getTransactions(token);
        setTransactions(data)
    });
    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransactionData({
            ...transactionData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addTransaction(transactionData.user_id, [transactionData], token);
            message.success('Transaction added:', response);
            setIsModalOpen(false);
            fetchTransactions();
        } catch (error) {
            console.error('Failed to add transaction:', error);
        }
    };

    const handleDeleteTransaction = async (transaction_id) => {
        try {
            await deleteTransaction(transaction_id, token);
            message.success('User deleted successfully');
            fetchTransactions();
        } catch (error) {
            console.error('Failed to delete user:', error);
            message.error('Failed to delete user');
        }
    };

    return (
        <Accordion.Panel header="Transactions">
            <div className="header-panel">
                <h1 className="users__header-item" onClick={() => setIsDeleteMode(!isDeleteMode)}>Transaction ID</h1>
                <h1 className="users__header-item">Product ID</h1>
                <h1 className="users__header-item">User ID</h1>
                <h1 className="users__header-item">Product Name</h1>
                <h1 className="users__header-item">Price</h1>
                <h1 className="users__header-item">Status</h1>
                <h1 className="users__header-item" onClick={() => setIsModalOpen(true)}>Transaction date</h1>
                {isDeleteMode && (
                    <h1 className="users__header-item">Delete</h1>
                )}
            </div>
            {isLoadingT
                ?
                <Spin/>
                :
                transactions.map((item) => (
                    <TransactionsInfo item={item} key={item.id} isDeleteMode={isDeleteMode} handleDeleteTransaction={handleDeleteTransaction}/>
                ))}

            {errorT && <p style={{marginTop: 20, color: "red"}}>{errorT}</p>}

            <AddTransactionModal
                transactionData={transactionData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </Accordion.Panel>
    );
};

export default Transaction;