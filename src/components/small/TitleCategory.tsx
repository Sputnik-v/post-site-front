import React from "react";

interface ITitle {
    title: string;
    width?: string;
    color?: string;
}

export const TitleCategory = ({title, width = 'text-xl', color = 'text-gray-500'}:ITitle) => {
    
    
    return  (
        <a href="/" className="flex flex-row justify-start items-center group">
            <div className="border-2 border-gray-400 group-hover:border-sky-500 rounded-md px-3 py-2">
                <h2 className={color + " " + width + " " + "group-hover:text-sky-500"}>{title}</h2>
            </div>
            <div className="w-full">
                <span className="w-full bg-gray-400 h-[2px] block group-hover:bg-sky-500"></span>
            </div>
        </a>
    )
}