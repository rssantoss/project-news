import React from 'react';
import NewsCard from './NewsCard';

function NewsList({ allNews }) {
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {allNews.map((news) => (
                <div className='p-6'>
                    <NewsCard
                        key={news._id}
                        _id={news._id}
                        name={news.name}
                        species={news.species}
                    />
                </div>
            ))}
        </div>
    )
}

export default NewsList;