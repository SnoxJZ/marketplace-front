import React from 'react';
import "./PromptInfo.css"
import Title from "../ui/Title/Title";
import { Rating } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useParams} from "react-router-dom";
import productList from "../Marketplace/MarketplaceItems/ProductList";
import saves from "../../assets/PromptInfo/heart-light.png"
import views from "../../assets/PromptInfo/eye-line.png"
import PromptInfoDetails from "./PromptInfoParts/PromptInfoDetails";
import PromptInfoStat from "./PromptInfoParts/PromptInfoStat";

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

const PromptInfo = () => {
    const params = useParams();
    const productId = parseInt(params.id, 10);
    const product = productList.find(item => item.id === productId);

    if (!product) {
        return <h1>Not found</h1>;
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="prompt__info">
                <div className="prompt__info-details">
                    <PromptInfoDetails product={product}/>
                    <PromptInfoStat product={product}/>
                </div>
                <div className="prompt__info-img">

                </div>
            </div>
        </ThemeProvider>
    );
};

export default PromptInfo;
