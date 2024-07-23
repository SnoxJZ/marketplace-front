import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Route, Routes } from 'react-router-dom';

const pageTransition = {
    initial: {
        opacity: 0,
        position: 'absolute', // добавляем позиционирование для наложения элементов
        width: '100%',
    },
    animate: {
        opacity: 1,
        position: 'relative',
        width: '100%',
    },
    exit: {
        opacity: 0,
        position: 'absolute', // добавляем позиционирование для наложения элементов
        width: '100%',
    },
};

const AnimatedRoute = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="sync">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="*"
                    element={
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageTransition}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }} // добавляем позиционирование для наложения элементов
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
