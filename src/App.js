import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Preloader from "./components/Preloader/Preloader";
import {ThemeProviderMain} from "./providers/ThemeProviderMain";

const theme = createTheme({
    components: {
        MuiRating: {
            styleOverrides: {
                root: {
                    '& .MuiRating-iconEmpty': {
                        color: 'var(--main-text-color)',
                    },
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProviderMain>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Preloader/>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </BrowserRouter>
            </ThemeProvider>
        </ThemeProviderMain>
    );
}

export default App;
