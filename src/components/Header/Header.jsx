import React, {useContext, useEffect, useState} from 'react';
import './Header.css';
import {ThemeContext} from "../../providers/ThemeProviderMain";
import searchIcon from '../../assets/Header/search.png';
import dark from "../../assets/Header/dark.png";
import light from "../../assets/Header/light.png";
import defaultAva from "../../assets/Header/avatar-default.png";
import logo from "../../assets/Header/logo.png";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import HeaderBurger from "./HeaderBurger";
import {useFetching} from "../../hooks/useFetching";
import {getProfile} from "../../API/useProfileService";
import {useAuth} from "../../context/AuthContext";
import {Spin} from "antd";
import {FilterContext} from "../../context/FilterContext";

const Header = () => {
    const { setPage } = useContext(FilterContext);
    const [profile, setProfile] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext);
    const [themeImg, setThemeImg] = useState(dark);
    const [fadeClass, setFadeClass] = useState('');
    const { token } = useAuth();
    const router = useNavigate()
    const [searchQuery, setSearchQuery] = useState('');

    const [fetchProfile, isLoading, error] = useFetching(async () => {
        const data = await getProfile(token);
        setProfile(data.profile);
    });
    useEffect(() => {
        if (token) {
            fetchProfile();
        }
    }, [token]);

    const changeTheme = () => {
        setFadeClass('fade-out');

        setTimeout(() => {
            setTheme(theme === "light" ? "dark" : "light");
            setThemeImg(themeImg === light ? dark : light);
            setFadeClass('fade-in');
        }, 400);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        router(`/products?search=${searchQuery}`);
        setPage(1);
    };

    return (
        <div style={{margin: "24px 0 32px 0"}}>
            <header>
                <ul className="header__content">
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
                </ul>
                <div className="header__logo"><img src={logo} alt="logo" className="header__logo-img"/></div>
                <div className="header__tools">
                    <div className="search__box">
                        <Input id="search-input" value={searchQuery} onChange={handleSearchChange}/>
                        <button className="search__btn" onClick={handleSearch}><img src={searchIcon} className="search__ico" alt="search"/></button>
                    </div>

                    {token
                    ?
                        (<Link to="/profile">
                            {isLoading
                                ? <Spin/>
                                : <div className="auth__profile">
                                    <h1 className="auth__profile-name">{profile.nickname}</h1>
                                    <img 
                                        src={profile.avatar ? `http://127.0.0.1:8001/api/${profile.avatar.replace('app/', '')}?t=${new Date().getTime()}` : defaultAva} 
                                        alt="" 
                                        className="auth__profile-avatar"
                                    />
                                </div>
                            }
                        </Link>
                   ) :
                       ( <Link to="/login">
                            <Button>Log in</Button>
                        </Link>
                   ) }
                    <img src={themeImg} alt="dark-mode" className={`color__mode ${fadeClass}`} onClick={changeTheme}/>
                </div>
            </header>
            <HeaderBurger
                profile={profile}
                token={token}
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                handleSearch={handleSearch}
            />
            <div className="err-title" style={{display: "none"}}>{error}</div>
        </div>
    );
};

export default Header;
