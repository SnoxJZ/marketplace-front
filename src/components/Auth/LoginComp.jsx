import React from 'react';
import "./Auth.css"
import Title from "../ui/Title/Title";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {Link} from "react-router-dom";

const LoginComp = () => {
    return (
        <div className="login__page">
            <Title fontSize="48px">Welcome back!</Title>
            <form action="">
                <div className="auth__field">
                    <h1>Email</h1>
                    <Input type="email"/>
                </div>
                <div className="auth__field">
                    <h1>Password</h1>
                    <Input type="password"/>
                </div>
                <h1 className="forgot__btn">Forgot password?</h1>
                <div className="auth__btns">
                    <Link to="/profile">
                        <Button>Login</Button>
                    </Link>
                    <Link to="/register">
                        <h1>Create account</h1>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginComp;