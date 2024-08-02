import React, {useState, useEffect, useRef, useContext} from 'react';
import "./Header.css";
import dark from "../../assets/Header/dark.png";
import Input from "../ui/Input/Input";
import searchIcon from "../../assets/Header/search.png";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";
import {ThemeContext} from "../../providers/ThemeProviderMain";
import light from "../../assets/Header/light.png";
import defaultAva from "../../assets/Header/avatar-default.png";
import logo from "../../assets/Header/logo.png";

const HeaderBurger = ({token, profile, searchQuery, handleSearch, handleSearchChange}) => {
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
                        <Input id="search-input-mob" value={searchQuery} onChange={handleSearchChange}/>
                        <button className="search__btn" onClick={handleSearch}><img src={searchIcon} className="search__ico" alt="search"/>
                        </button>
                    </div>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/products">
                        <li>Products</li>
                    </Link>
                    <Link to="/faq">
                        <li>FAQ</li>
                    </Link>
                    <Link to="/contacts">
                        <li>Contacts</li>
                    </Link>
                    {token
                        ?
                        <Link to="/profile">
                            <div className="auth__profile">
                                <h1 className="auth__profile-name">{profile.nickname}</h1>
                                <img src={profile.avatar ? `http://127.0.0.1:8001/${profile.avatar}?t=${new Date().getTime()}` : defaultAva} alt="" className="auth__profile-avatar"/>
                            </div>
                        </Link>
                        :
                        <Link to="/login">
                            <Button>Log in</Button>
                        </Link>
                    }
                </ul>
            </div>
            <div className="header__logo"><img src={logo} alt="logo" className="header__logo-img"/></div>
            <img src={themeImg} alt="dark-mode" className={`color__mode ${fadeClass}`} onClick={changeTheme}/>
        </div>
    );
};

export default HeaderBurger;
