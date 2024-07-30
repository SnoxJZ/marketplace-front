import React, {useContext, useEffect, useState} from 'react';
import './Header.css';
import {ThemeContext} from "../../providers/ThemeProviderMain";
import searchIcon from '../../assets/Header/search.png';
import dark from "../../assets/Header/dark.png";
import light from "../../assets/Header/light.png";
import defaultAva from "../../assets/Header/avatar-default.png";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {Link} from "react-router-dom";
import HeaderBurger from "./HeaderBurger";
import {useFetching} from "../../hooks/useFetching";
import {getProfile} from "../../API/useProfileService";
import {useAuth} from "../../context/AuthContext";
import {Spin} from "antd";

const Header = () => {
    const [profile, setProfile] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext);
    const [themeImg, setThemeImg] = useState(dark);
    const [fadeClass, setFadeClass] = useState('');
    const { token } = useAuth();

    const [fetchProfile, isLoading, error] = useFetching(async () => {
        const data = await getProfile(token);
        setProfile(data);
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

    console.log(error)

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

                    {token
                    ?
                        (<Link to="/profile">
                            {isLoading
                                ? <Spin/>
                                : <div className="auth__profile">
                                    <h1 className="auth__profile-name">{profile.nickname}</h1>
                                    <img src={profile.avatar ? `http://127.0.0.1:8000/${profile.avatar}` : defaultAva} alt=""
                                         className="auth__profile-avatar"/>
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
            <HeaderBurger profile={profile} token={token}/>
        </div>
    );
};

export default Header;
