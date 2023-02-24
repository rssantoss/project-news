import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import News from "../news/News";

function Home() {
  return (
    <div className="bg-gray-100 font-serif">
      <Header />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
