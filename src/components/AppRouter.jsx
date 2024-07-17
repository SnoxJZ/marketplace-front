import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Error from "./Error/Error";
import PromptInfo from "./PromptInfo/PromptInfo";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="marketplace" element={<Marketplace/>}/>
            <Route path="marketplace/prompt" element={<PromptInfo/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;