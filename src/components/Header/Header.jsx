import React, {useContext, useState} from 'react';
import './Header.css';
import {ThemeContext} from "../../providers/ThemeProviderMain";
import searchIcon from '../../assets/Header/search.png';
import dark from "../../assets/Header/dark.png";
import light from "../../assets/Header/light.png";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {Link} from "react-router-dom";
import HeaderBurger from "./HeaderBurger";

const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [themeImg, setThemeImg] = useState(dark);
    const [fadeClass, setFadeClass] = useState('');

    const changeTheme = () => {
        setFadeClass('fade-out');

        setTimeout(() => {
            setTheme(theme === "light" ? "dark" : "light");
            setThemeImg(themeImg === light ? dark : light);
            setFadeClass('fade-in');
        }, 400);
    };

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
                        <Input id="search-input"/>
                        <button className="search__btn"><img src={searchIcon} className="search__ico" alt="search"/></button>
                    </div>
                    <Link to="/login">
                        <Button>Log in</Button>
                    </Link>
                    <img src={themeImg} alt="dark-mode" className={`color__mode ${fadeClass}`} onClick={changeTheme}/>
                </div>
            </header>
            <HeaderBurger/>
        </div>
    );
};

export default Header;
