import React, {useState} from 'react';
import "./Auth.css"
import Title from "../ui/Title/Title";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

const LoginComp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login__page">
            <Title fontSize="48px">Welcome back!</Title>
            <form action="" onSubmit={handleSubmit}>
                <div className="auth__field">
                    <h1>Email</h1>
                    <Input type="email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="auth__field">
                    <h1>Password</h1>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <h1 className="forgot__btn">Forgot password?</h1>
                <div className="auth__btns">
                    <Button>Login</Button>
                    <Link to="/register">
                        <h1>Create account</h1>
                    </Link>
                </div>
            </form>
            {error && <p style={{marginTop: 20, color: "red"}}>{error}</p>}
        </div>
    );
};

export default LoginComp;