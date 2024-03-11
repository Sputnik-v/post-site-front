import React from "react";

interface ICategoryProps {
    title: string;
    path: string;
}

export const Category = ({title, path}:ICategoryProps) => {
    return (
        <div className="hover:bg-gray-100 leading-7">
            <a className="text-gray-500 text-[15px]" href={path}>{title}</a>
        </div>
    )
}