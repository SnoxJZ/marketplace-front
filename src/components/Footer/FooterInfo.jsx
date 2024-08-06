import React from 'react';
import mastercard from "../../assets/Footer/mastercard.png";
import visa from "../../assets/Footer/visa.png";

const FooterInfo = () => {
    return (
        <div className="footer__info">
            <div className="footer__img">
                <img src={visa} alt="visa" className='card__logo'/>
                <img src={mastercard} alt="mastercard" className='card__logo'/>
            </div>
            <div className="footer__inf">
                <p className="footer_item info details" style={{marginTop: 24}}>
                    Artallai s.r.o. (218 07 531) Rybná 716/24, Staré Město, 110 00 Praha 1, Czech Republic.
                </p>
            </div>
            <div className="footer__inf">
                <p className="footer_item info details" style={{marginTop: 24}}>
                    Artallai - All right reserved. Copyright Ⓒ 2024
                </p>
            </div>
        </div>
    );
};

export default FooterInfo;