import React, {useState} from 'react';
import './Header.css'
import searchIcon from '../../assets/Header/search.png'
import dark from "../../assets/Header/dark.png"
import light from "../../assets/Header/light.png"
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {Link} from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState({});

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        if(isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return {display: "flex"}
            })
        }
    }
    
    return (
        <div style={{margin: "24px 0 32px 0"}}>
            <header>
                <ul className="header__content">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/marketplace">
                        <li>Marketplace</li>
                    </Link>
                    <Link to="/faq">
                        <li>FAQ</li>
                    </Link>
                    <Link to="/contacts">
                        <li>Contacts</li>
                    </Link>
                </ul>
                <div className="header__logo">Logo</div>
                <div className="header__tools">
                    <div className="search__box">
                        <Input/>
                        <button className="search__btn"><img src={searchIcon} className="search__ico" alt="search"/></button>
                    </div>
                    <Link to="/login">
                        <Button>Log in</Button>
                    </Link>
                    <img src={dark} alt="dark-mode" className="color__mode"/>
                </div>
            </header>
        </div>
    );
};

export default Header;