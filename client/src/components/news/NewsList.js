import React from "react";
//import NewsCard from './NewsCard';

function NewsList({ allNews }) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {allNews.map((news) => (
        <div key={news._id} className="p-12">
          <div className="xl:h-48 bg-white border rounded-md shadow-xl p-9 hover:bg-gray-200">
            <label className="flex flex-col items-center">
              <h1 className="font-bold text-lg">{news.name}</h1>
              <p>{news.species}</p>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NewsList;
