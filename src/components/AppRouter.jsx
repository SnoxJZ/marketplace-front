import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Error from "./Error/Error";
import PromptDetails from "../pages/PromptDetails";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Contacts from "../pages/Contacts";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import AnimatedRoute from "../animation/AnimatedRoute";
import AdminPanel from "../pages/AdminPanel";

const AppRouter = () => {
    return (
        <AnimatedRoute>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="marketplace" element={<Marketplace />} />
                <Route exact path="marketplace/item/:id" element={<PromptDetails />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="faq" element={<Faq />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="adminpanel" element={<AdminPanel />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </AnimatedRoute>
    );
};

export default AppRouter;
