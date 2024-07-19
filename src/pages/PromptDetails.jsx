import React from 'react';
import PromptInfo from "../components/PromptInfo/PromptInfo";
import PromptReviews from "../components/PromptInfo/PromptReviews";
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

const PromptDetails = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="prompt__info-wrapper">
                <PromptInfo/>
                <PromptReviews/>
            </div>
        </ThemeProvider>
    );
};

export default PromptDetails;