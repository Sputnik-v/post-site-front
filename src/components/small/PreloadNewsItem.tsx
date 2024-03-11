import React from 'react';

interface IPreloadAttribbutes {
    title: string;
    date: string;
    href: string;
}

export const PreloadNewsItem = ({title, date, href}:IPreloadAttribbutes) => {
    return (
        <a href={href} className='block w-full group-hover:bg-gray-100 hover:bg-gray-100'>
            <h4 className='text-md text-gray-700 font-bold'>{title.slice(0, 50)}</h4>
            <p className='text-sm text-gray-500'>{date}</p>
        </a>
    )
}