import React from 'react';

function NewsCard({ _id, name, species }) {
    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    }

    return (
        <div>
            <div className='xl:h-48 bg-white border rounded-md shadow-xl p-9 hover:bg-gray-200' onClick={() => handleClickCard()}>
                <label className='flex flex-col items-center'>
                    <h1 className='font-bold text-lg'>{name}</h1>
                    <p>{species}</p>
                </label>
            </div>
        </div>
    )
}
export default NewsCard;