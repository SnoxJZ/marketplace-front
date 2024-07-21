import React from 'react';
import "./Auth.css"
import Title from "../ui/Title/Title";
import Input from "../ui/Input/Input";
import {Link} from "react-router-dom";
import Button from "../ui/Button/Button";

const RegisterComp = () => {
    return (
        <div className="login__page">
            <Title fontSize="48px">Welcome!</Title>
            <form action="">
                <div className="auth__field">
                    <h1>Email</h1>
                    <Input type="email"/>
                </div>
                <div className="auth__field">
                    <h1>Username</h1>
                    <Input type="text"/>
                </div>
                <div className="auth__field">
                    <h1>Password</h1>
                    <Input type="password"/>
                </div>
                <div className="auth__btns">
                    <Link to="/profile">
                        <Button>Registration</Button>
                    </Link>
                    <Link to="/login">
                        <h1>I have account</h1>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterComp;