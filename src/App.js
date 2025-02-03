import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PizzaSlice from './components/PizzaSlice';
import CoffeeCup from './components/CoffeeCup';

function App() {
  const [data, setData] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch data
  useEffect(() => {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/pad-o-guys-24-25")
      .then(res => res.json())
      .then(res => setData(res.data['article.aml']));
  }, []);

  return (
    data && (
      <div className="App">
        <Header />
        <div style={{ height: '150vh', position: 'relative', padding: '2rem' }}>
          Hello Daily Bruin!
          <PizzaSlice scrollY={scrollY} />
          <CoffeeCup scrollY={scrollY} />
        </div>
        <Footer />
      </div>
    )
  );
}

export default App;