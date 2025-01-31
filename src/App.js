import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollingEffect from "./components/ScrollingEffect";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/pad-o-guys-24-25")
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // hard coded test slides to test
  const testSlides = [
    "FIRST TEXT SLIDE TEST",
    "SECOND SLIDE",
    "THIRD SLIDE",
    "FOURTH/LAST SLIDE"
  ];

  let slides = [];

  if (data) {
    const firstArticle = data.articles?.[0] || null;
    slides = firstArticle?.article_body
      ? firstArticle.article_body.split("\n").filter(Boolean)
      : [];
  }

  // using test slides if API data empty
  if (slides.length === 0) {
    slides = testSlides;
  }

  return (
    <div className="App">
      <Header />
      <ScrollingEffect slides={slides} />
      <Footer />
    </div>
  );
}

export default App;



