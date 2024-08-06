import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, privateRoutes, publicRoutes } from '../router/router';
import AnimatedRoute from '../animation/AnimatedRoute';
import { useAuth } from '../context/AuthContext';
import AdminGuard from '../context/AdminGuard'
import ScrollToTop from "../context/ScrollToTop";

const AppRouter = () => {
    const { token } = useAuth();

    return (
        token ? (
            <AnimatedRoute>
                <ScrollToTop/>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            exact={route.exact}
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                    {privateRoutes.map(route =>
                        route.path === 'adminpanel' ? (
                            <Route
                                exact={route.exact}
                                path={route.path}
                                key={route.path}
                                element={
                                    <AdminGuard>
                                        {route.element}
                                    </AdminGuard>
                                }
                            />
                        ) : (
                            <Route
                                exact={route.exact}
                                path={route.path}
                                element={route.element}
                                key={route.path}
                            />
                        )
                    )}
                    <Route path="*" element={<Navigate to="/error" replace />} />
                </Routes>
            </AnimatedRoute>
        ) : (
            <AnimatedRoute>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            exact={route.exact}
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                    {authRoutes.map(route =>
                        <Route
                            exact={route.exact}
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                    <Route path="*" element={<Navigate to="/error" replace />} />
                </Routes>
            </AnimatedRoute>
        )
    );
};

export default AppRouter;
