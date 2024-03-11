
import { useState } from "react";

export const Search = () => {

const [ search, setSearch ] = useState('');


    return (
        <form className="flex flex-row items-center">
            <input className="w-full h-10 outline-none border-[1px] rounded-s-sm pl-3 text-gray-700" type="text" placeholder="Поиск ..."/>
            <button className="w-32 h-full text-white bg-black hover:bg-gray-900" type="submit">Поиск</button>
            <div>{search}</div>
        </form>
    )
}