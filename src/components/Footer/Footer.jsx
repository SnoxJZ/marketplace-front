import React from 'react';
import "./Footer.css"
import FooterMain from "./FooterMain";
import FooterCategories from "./FooterCategories";
import FooterContacts from "./FooterContacts";
import FooterFollow from "./FooterFollow";
import FooterInfo from "./FooterInfo";
import {motion} from 'framer-motion';

const footer = {
    hidden: {
        y: 350,
    },
    visible: {
        y: 0,
    },
};

const Footer = () => {
    return (
        <motion.div
            className="footer"
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            variants={footer}
            transition={{ duration: 0.7 }}
            style={{overflow: "hidden"}}
        >
            <span className="footer_rect"></span>
            <div className="footer__links">
                <FooterMain/>
                <FooterCategories/>
                <FooterContacts/>
                <FooterFollow/>
            </div>
            <span className="footer__line"></span>
            <FooterInfo/>
        </motion.div>
    );
};

export default Footer;