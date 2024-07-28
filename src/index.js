import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css'
import { createTheme, MantineProvider } from '@mantine/core';
import {AuthProvider} from "./context/AuthContext";

const theme = createTheme({
    /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </AuthProvider>
);

