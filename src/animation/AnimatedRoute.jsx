import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Route, Routes } from 'react-router-dom';

const pageTransition = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
};

const AnimatedRoute = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="*"
                    element={
                        <motion.div
                            initial="out"
                            animate="in"
                            exit="out"
                            variants={pageTransition}
                            transition={{ duration: 0.5 }} // 0.5 для более быстрой анимации
                        >
                            {children}
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;
