import React, {useState, useEffect, useRef, useContext} from 'react';
import "./Header.css";
import dark from "../../assets/Header/dark.png";
import Input from "../ui/Input/Input";
import searchIcon from "../../assets/Header/search.png";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";
import {ThemeContext} from "../../providers/ThemeProviderMain";
import light from "../../assets/Header/light.png";

const HeaderBurger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [themeImg, setThemeImg] = useState(dark)
    const [fadeClass, setFadeClass] = useState('');
    const burgerRef = useRef(null);
    const [theme, setTheme] = useContext(ThemeContext)

    const changeTheme = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setTheme(theme === "light" ? "dark" : "light");
            setThemeImg(themeImg === light ? dark : light);
            setFadeClass('fade-in');
        }, 400);
    };

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (burgerRef.current && !burgerRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="header__burger-container" ref={burgerRef}>
            <div className="header__burger">
                <div className="burger__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         onClick={handleMenu}>
                        <path d="M4 7H7M20 7H11M20 17H17M4 17H13M4 12H20" stroke="#FF9A62" strokeWidth="1.5"
                              strokeLinecap="round"/>
                    </svg>
                </div>
                <ul className={`burger__items ${isOpen ? 'show' : ''}`}>
                    <div className="search__box">
                        <Input id="search-input-mob"/>
                        <button className="search__btn"><img src={searchIcon} className="search__ico" alt="search"/>
                        </button>
                    </div>
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
                    <Link to="/login">
                        <Button id="login-btn">Log in</Button>
                    </Link>
                </ul>
            </div>
            <div className="header__logo">Logo</div>
            <img src={themeImg} alt="dark-mode" className={`color__mode ${fadeClass}`} onClick={changeTheme}/>
        </div>
    );
};

export default HeaderBurger;
