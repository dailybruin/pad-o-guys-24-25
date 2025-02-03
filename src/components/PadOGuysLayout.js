import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PizzaSlice from './PizzaSlice';
import CoffeeCup from './CoffeeCup';

const PadOGuysLayout = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 overflow-hidden font-sans">
            <div className="relative w-full h-[150vh] bg-wood-pattern flex justify-center items-center">
                {/* Background and paper layout */}
                <div className="absolute top-10 left-10">
                    <motion.img 
                        src="/assets/pencil.png" 
                        alt="Pencil" 
                        className="w-12 h-12" 
                        animate={{ y: scrollY * 0.1 }}
                    />
                </div>

                <div className="relative p-10 bg-white shadow-xl rounded-2xl z-10">
                    <p className="text-gray-800 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes.
                    </p>
                </div>

                <PizzaSlice scrollY={scrollY} />
                <CoffeeCup scrollY={scrollY} />
            </div>
        </div>
    );
};

export default PadOGuysLayout;
