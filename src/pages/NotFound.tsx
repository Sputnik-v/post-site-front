import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="flex flex-row justify-center items-center h-[100vh] relative">
            <div className="text-sky-500 font-bold text-8xl">Not Found!</div>
            <Link to="/" className="absolute top-20 border-2 border-sky-200 py-2 px-5 text-sky-300 rounded-md hover:bg-sky-400 hover:text-white transition"><span>Home</span></Link>
        </div>
    )
}