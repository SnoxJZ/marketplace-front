import React, {useEffect, useState} from 'react';
import Title from "../../ui/Title/Title";
import Button from "../../ui/Button/Button";
import ModalDeposit from "../../ModalDeposit/ModalDeposit";
import {getBalance, purchase} from "../../../API/usePaymentsService";
import {useAuth} from "../../../context/AuthContext";
import {Spin} from "antd";
import ModalGet from "../ModalGet/ModalGet";

const PromptInfoGet = ({product, profileId, productId, transactions}) => {
    const [modalActive, setModalActive] = useState(false);
    const [modalGet, setModalGet] = useState(false);
    const [balance, setBalance] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [isPurchased, setIsPurchased] = useState(false)
    const { token } = useAuth();

    const fetchBalance = async () => {
            const data = await getBalance(profileId, token);
            setBalance(data.balance)
    };

    const purchaseProduct = async () => {
        if (balance < product.price) {
            setModalActive(true);
        } else {
            try {
                setIsLoading(true)
                const data = await purchase(token, profileId, productId);
                if (data.image_url && data.message) {
                    setMessage(data.message);
                    setIsPurchased(true);
                }
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.error("Error topping up balance:", error);
            }
        }
    };

    useEffect(() => {
        if (token) {
            fetchBalance();
        }

        const transaction = transactions.find(transaction => transaction.product_id === productId);
        if (transaction) {
            setIsPurchased(true);
            setMessage(`Product purchase successful`);
        }
    }, [productId, transactions, token]);

    return (
        <div className="prompt__info-get">
            <div className="get__prompt">
                <Title color="var(--main-text-color)" fontSize="48px">{product.price} ART</Title>
                {isPurchased
                    ?
                        (<div className="redirect-button" style={{marginTop: 0}}>
                            <Button onClick={() => setModalGet(true)}>Download prompt</Button>
                        </div>)
                    :
                        (<Button onClick={purchaseProduct}>{isLoading ? <Spin/> : 'Get prompt'}</Button>)
                }
                <ModalDeposit modalActive={modalActive} setModalActive={setModalActive} profileId={profileId}/>
                <ModalGet modalActive={modalGet} setModalActive={setModalGet} product={product}/>
            </div>
            {message && (<h1 className={'payment__message'}>{message}</h1>)}

            <p className="prompt__descr-text" style={{color: 'rgba(145, 143, 143, 1)'}}>After purchasing, you will gain
                access to the photo file. By purchasing this prompt, you agree to our terms
                of service.</p>
        </div>
    );
};

export default PromptInfoGet;