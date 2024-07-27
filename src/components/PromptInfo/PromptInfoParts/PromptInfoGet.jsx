import React, {useState} from 'react';
import Title from "../../ui/Title/Title";
import Button from "../../ui/Button/Button";
import ModalDeposit from "../../ModalDeposit/ModalDeposit";

const PromptInfoGet = ({product}) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="prompt__info-get">
            <div className="get__prompt">
                <Title color="var(--main-text-color)" fontSize="48px">{product.price} ART</Title>
                <Button onClick={() => setModalActive(true)}>Get prompt</Button>
                <ModalDeposit modalActive={modalActive} setModalActive={setModalActive}/>
            </div>
            <p className="prompt__descr-text" style={{color: 'rgba(145, 143, 143, 1)'}}>After purchasing, you will gain access to the prompt file which you can use with Midjourney. You'll
                receive 20 free generation credits with this purchase. By purchasing this prompt, you agree to our terms
                of service.</p>
        </div>
    );
};

export default PromptInfoGet;