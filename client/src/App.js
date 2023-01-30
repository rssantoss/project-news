import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";

function App() {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await Axios.get("http://localhost:3001/news");
      setAllNews(data);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      <News/>
      <Footer />
    </div>
  );
}

export default App;

