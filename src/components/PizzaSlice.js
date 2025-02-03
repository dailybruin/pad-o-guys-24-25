import React from 'react';
import { motion } from 'framer-motion';

const PizzaSlice = ({ scrollY }) => {
    return (
        <div className="absolute bottom-20 right-20">
            <motion.img 
                src="/assets/pizza.png" 
                alt="Pizza Slice" 
                className="w-16 h-16" 
                animate={{ opacity: scrollY > 200 ? 1 : 0, y: scrollY > 200 ? 0 : 100 }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
};

export default PizzaSlice;
