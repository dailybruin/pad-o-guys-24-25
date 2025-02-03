import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoStack from "./components/PhotoStack";

function App() {
  const photos = [
    { src: "/images/photo1.jpg", alt: "Photo 1", credit: "John Doe" },
    { src: "/images/photo2.jpg", alt: "Photo 2", credit: "Jane Smith" },
    { src: "/images/photo3.jpg", alt: "Photo 3", credit: "Photography Inc." },
    { src: "/images/photo4.jpg", alt: "Photo 4", credit: "Another Photographer" },
    { src: "/images/photo5.jpg", alt: "Photo 5", credit: "Creative Artist" },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Hello Daily Bruin!</h1>
        <PhotoStack photos={photos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;