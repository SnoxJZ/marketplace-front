import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Preloader from "./components/Preloader/Preloader";
import { ThemeProviderMain } from "./providers/ThemeProviderMain";
import CompStyles from "./providers/CompStyles";

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

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoaded(true);
            }, 2000);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <ThemeProviderMain>
            <CompStyles>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        {!isLoaded && <Preloader />}
                        {isLoaded && (
                            <>
                                <Header />
                                <AppRouter />
                                <Footer />
                            </>
                        )}
                    </BrowserRouter>
                </ThemeProvider>
            </CompStyles>
        </ThemeProviderMain>
    );
}

export default App;
