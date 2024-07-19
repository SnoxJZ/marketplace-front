import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Error from "./Error/Error";
import PromptDetails from "../pages/PromptDetails";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route exact path="marketplace" element={<Marketplace/>}/>
            <Route exact path="marketplace/item/:id" element={<PromptDetails/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;