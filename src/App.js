import React from "react";
import "./styles/App.css"
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiRating: {
            styleOverrides: {
                root: {
                    '& .MuiRating-iconEmpty': {
                        color: 'rgba(255, 255, 255, 1)',
                    },
                },
            },
        },
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
