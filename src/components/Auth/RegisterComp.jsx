import React, {useState} from 'react';
import "./Auth.css"
import Title from "../ui/Title/Title";
import Input from "../ui/Input/Input";
import {Link, useNavigate} from "react-router-dom";
import Button from "../ui/Button/Button";
import {useAuth} from "../../context/AuthContext";

const RegisterComp = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(email, nickname, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login__page">
            <Title fontSize="48px">Welcome!</Title>
            <form onSubmit={handleSubmit}>
                <div className="auth__field">
                    <h1>Email</h1>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="auth__field">
                    <h1>Username</h1>
                    <Input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}/>
                </div>
                <div className="auth__field">
                    <h1>Password</h1>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="auth__btns">
                    <Button type="submit">Registration</Button>
                    <Link to="/login">
                        <h1>I have account</h1>
                    </Link>
                </div>
            </form>
            {error && <p style={{marginTop: 20, color: "red"}}>{error}</p>}
        </div>
    );
};

export default RegisterComp;