import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoStack from "./components/PhotoStack";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Hello Daily Bruin!</h1>
        <PhotoStack />
      </main>
      <Footer />
    </div>
  );
}

export default App;