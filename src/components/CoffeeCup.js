import React from 'react';
import { motion } from 'framer-motion';

const CoffeeCup = ({ scrollY }) => {
    return (
        <div className="absolute top-20 right-10">
            <motion.img 
                src="/assets/coffee.png" 
                alt="Coffee Cup" 
                className="w-20 h-20" 
                animate={{ scale: scrollY > 300 ? 1.1 : 1, rotate: scrollY * 0.2 }}
            />
        </div>
    );
};

export default CoffeeCup;