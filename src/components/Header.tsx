import React from "react";
import BxlTelegram from "../svg/BxlTelegram";
import BxlVk from "../svg/BxlVk";

export const Header = () => {
    return (
        <header className="w-full h-20 shadow-md flex items-center">

            <div className="container flex flex-row items-center justify-between">
                <a href="/" className="block">
                    <div className="flex flex-col justify-start">
                        <p className="text-2xl font-bold tracking-wide text-sky-500">Pegas News Magazine</p>
                        <p className="text-gray-400">Мировой сайт для Вас</p>
                    </div>
                </a>

                <nav className="">
                    <ul className="flex flex-row justify-center items-center gap-3">
                        <li className="text-md text-sky-400 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-300 hover:text-sky-400"><a href="/">Домой</a></li>
                        <li className="text-md text-gray-600 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-300 hover:text-sky-400"><a href="/">Стиль жизни</a></li>
                        <li className="text-md text-gray-600 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-300 hover:text-sky-400"><a href="/">Бизнес</a></li>
                        <li className="text-md text-gray-600 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-300 hover:text-sky-400"><a href="/">Мода</a></li>
                        <li className="text-md text-gray-600 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-300 hover:text-sky-400"><a href="/">Хит</a></li>
                        <li className="text-md text-gray-600 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-300 hover:text-sky-400"><a href="/">Музыка</a></li>
                    </ul>
                </nav>

                <div className="flex flex-row gap-2">
                    <a className="p-2 border-2 rounded-md hover:shadow-inner" href="/">
                        <BxlTelegram />
                    </a>
                    <a className="p-2 border-2 rounded-md hover:shadow-inner" href="/">
                        <BxlVk />
                    </a>
                </div>

                <div className="flex flex-row text-sm">
                    <div className="">
                        <a className="hover:text-sky-800 border-r-2 border-gray-400 pr-2" href="/">Войти</a>
                    </div>
                    <div>
                        <a className="hover:text-sky-800 pl-2" href="/">Регистрация</a>
                    </div>
                </div>

            </div>

        </header>
    )
}