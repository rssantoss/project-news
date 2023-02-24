import React from "react";
//import NewsCard from './NewsCard';

function NewsList({ allNews }) {
  return (
    <div className="grid grid-cols-1">
      {allNews.map((news) => (
        <div
          key={news._id}
          className="flex flex-row my-10 font-serif min-w-full justify-center"
        >
          <div className="h-32 w-36 rounded-tr-lg border bg-white shadow-md hover:bg-gray-200"></div>
          <div className="w-96 mx-5 flex flex-col justify-between">
            <h2 className="font-bold text-yellow-600">Categoria</h2>
            <h1 className="text-lg font-bold text-blue-800">{news.name}</h1>
            <div className=" rounded-md bg-gray-200 border-b hover:bg-gray-200"></div>
            <p>
              Por <code className="font-bold">Autor</code> Dia às Hora
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NewsList;
