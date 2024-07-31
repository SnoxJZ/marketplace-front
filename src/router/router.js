import Home from "../pages/Home";
import React from "react";
import Marketplace from "../pages/Marketplace";
import PromptDetails from "../pages/PromptDetails";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Contacts from "../pages/Contacts";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import AdminPanel from "../pages/AdminPanel";
import Error from "../components/Error/Error";
import ProfileUsers from "../components/Profile/ProfileUsers";

export const authRoutes = [
    { path: "login", element: <Login />, exact: true },
    { path: "register", element: <Register />, exact: true },
]

export const privateRoutes = [
    { path: "profile", element: <Profile />, exact: true },
    { path: "settings", element: <Settings />, exact: true },
    { path: "adminpanel", element: <AdminPanel />, exact: true },
]

export const publicRoutes = [
    { path: "/", element: <Home />, exact: true },
    { path: "marketplace", element: <Marketplace />, exact: true },
    { path: "marketplace/item/:id", element: <PromptDetails />, exact: true },
    { path: "profile/:nickname", element: <ProfileUsers/>, exact: true },
    { path: "contacts", element: <Contacts />, exact: true },
    { path: "faq", element: <Faq />, exact: true },
    { path: "about", element: <AboutUs />, exact: true },
    { path: "*", element: <Error />, exact: true },
]