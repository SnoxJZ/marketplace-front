import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {authRoutes, privateRoutes, publicRoutes} from "../router/router";
import AnimatedRoute from "../animation/AnimatedRoute";
import {useAuth} from "../context/AuthContext";

const AppRouter = () => {
    const { token } = useAuth();

    return (
        token
            ?
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
                    {privateRoutes.map(route =>
                        <Route
                            exact={route.exact}
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                    <Route path = "*" element = {<Navigate to = "/error" replace/>}/>
                </Routes>
            </AnimatedRoute>
            :
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
                    <Route path = "*" element = {<Navigate to = "/error" replace/>}/>
                </Routes>
            </AnimatedRoute>
    );
};

export default AppRouter;
