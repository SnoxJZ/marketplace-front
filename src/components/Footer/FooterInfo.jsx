import React from 'react';
import mastercard from "../../assets/Footer/mastercard.png";
import visa from "../../assets/Footer/visa.png";

const FooterInfo = () => {
    return (
        <div className="footer__info">
            <div className="footer__img">
                <img src={mastercard} alt="mastercard"/>
                <img src={visa} alt="visa"/>
            </div>
            <div className="footer__inf">
                <p className="footer_item" style={{marginTop: 24}}>
                    Aleja Jana Pawla II, nr 43A, lok. 37B,
                </p>
            </div>
            <div className="footer__inf">
                <p className="footer_item" style={{marginTop: 24}}>
                    © Arallai 2024
                </p>
            </div>
        </div>
    );
};

export default FooterInfo;