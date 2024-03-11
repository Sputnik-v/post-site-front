import React from "react";

interface IRecentProps {
    title: string;
    path: string;
}


export const RecentPost = ({title, path}:IRecentProps) => {
    return (
        <div className="hover:bg-gray-100 leading-6">
            <a className="text-gray-500 text-[15px]" href={path}>{title}</a>
        </div>
    )
}