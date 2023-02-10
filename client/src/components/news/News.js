import React, { useState, useEffect } from "react";
import Axios from "axios";
import NewsList from "./NewsList";

function News() {    
    const [allNews, setAllNews] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const { data } = await Axios.get("http://localhost:3001/getNews");
            setAllNews(data);
          }
      
          fetchData();
        }, []);
      

    return (
        
            <div>
            {typeof allNews !== "undefined" && <NewsList allNews={allNews} />}
            </div>
        
    );
}

export default News;
