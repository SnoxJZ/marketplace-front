import React from 'react';
import './Header.css'
import searchIcon from '../../assets/Header/search.png'
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";

const Header = () => {

    return (
        <header>
            <ul className="header__content">
                <li>Home</li>
                <li>Marketplace</li>
                <li>FAQ</li>
                <li>Contacts</li>
            </ul>
            <div className="header__logo">Logo</div>
            <div className="header__tools">
                <div className="search__box">
                    <Input/>
                    <button className="search__btn"><img src={searchIcon} className="search__ico" alt="search"/></button>
                </div>
                <Button>Log in</Button>
            </div>
        </header>
    );
};

export default Header;