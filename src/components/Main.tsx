import React from "react";
import { TitleCategory } from "./small/TitleCategory";
import { HomeSlider } from "./HomeSlider";
import { PreloadNewsItem } from "./small/PreloadNewsItem";
import { ImagePreload } from "./small/ImagePreload";

const preloadNews = [
        {
            title: 'Will analysis essays ever rule the world?',
            date: 'December 21, 2015',
            href: '/',
            img: '/assets/img/1.jpg'
        },
        {
            title: 'Will analysis essays ever rule the world?',
            date: 'December 21, 2015',
            href: '/',
            img: '/assets/img/2.jpg'
        },
        {
            title: 'Will analysis essays ever rule the world?',
            date: 'December 21, 2015',
            href: '/',
            img: '/assets/img/3.jpg'
        },
        {
            title: '19 facts about military records that will impress your friends',
            date: 'December 21, 2015',
            href: '/',
            img: '/assets/img/4.jpg'
        },
        {
            title: 'What the world would be like if medicine shops did not exist',
            date: 'December 21, 2015',
            href: '/',
            img: '/assets/img/5.jpg'
        },
        {
            title: 'Why the world would end without financial reports',
            date: 'December 21, 2015',
            href: '/',
            img: '/assets/img/3.jpg'
        },
]
    

export const Main = () => {
    return (
        <div className="container">
            <div className="flex flex-row justify-between gap-7 mt-5">
                <div className="w-2/4">
                    <TitleCategory title="Мир" color="text-gray-500" width="text-xl"/>
                    <div className="mt-5">
                        <HomeSlider />
                    </div>
                </div>

                <div className="w-1/4">
                    <TitleCategory title="Экономика" color="text-gray-500" width="text-xl" />
                    <div className="mt-3">
                        {
                            preloadNews.map((item, i) => {
                                return <div key={i} className="mt-5"><PreloadNewsItem title={item.title} date={item.date} href={item.href} key={i}/></div>
                            })
                        }
                    </div>
                </div>

                <div className="w-1/4">
                    <TitleCategory title="Технология" color="text-gray-500" width="text-xl" />
                    <div className="mt-3">
                        {preloadNews.map((item, i) => {
                            return <a href={item.href} key={i} className="flex justify-between items-center gap-4 mb-4 group">
                                <ImagePreload classes="w-[70px] h-[70px] object-cover" src={item.img}/>
                                <PreloadNewsItem title={item.title} date={item.date} href={item.href}/>
                            </a>
                        })}
                    </div>
                </div>

            </div>

            {/* horizoneBlock */}
            <div className="relative mb-5">
                <TitleCategory title="Развлечения" color="text-gray-500" width="text-xl" />
                <div className="flex flex-row gap-4 mt-5">
                    {preloadNews.slice(2).map((item, i) => {
                        return <a href={item.href} key={i} className="flex flex-col justify-between items-center w-1/4 group">
                            <ImagePreload classes="w-[250px] h-[150px] object-cover" src={item.img}/>
                            <div className="pt-3 w-[250px]">
                                <PreloadNewsItem title={item.title} date={item.date} href={item.href}/>
                            </div>
                        </a>
                    })}

                    <div className="absolute right-[-30px] top-[140px]">
                        <a href="/" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 hover:bg-gray-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>

                </div>
                
            </div>

            {/* Scince */}

            <div className="">
                <TitleCategory title="Наука" color="text-gray-500" width="text-xl"/>
                <div className="flex flex-row gap-5 mt-5 mb-5">
                    {preloadNews.slice(3).map((item, i) => {
                        return <a key={i} className="flex flex-row w-1/3 gap-4 group justify-start items-start" href={item.href}>
                            <ImagePreload classes="w-[100px] h-[100px] object-cover" src={item.img} />
                            <div>
                                <PreloadNewsItem title={item.title} date={item.date} href={item.href}/>
                            </div>
                        </a>
                    })}
                </div>
            </div>

            {/* helth */}
            <div className="relative mb-5">
                <TitleCategory title="Развлечения" color="text-gray-500" width="text-xl" />
                <div className="flex flex-row gap-4 mt-5">
                    {preloadNews.slice(2).map((item, i) => {
                        return <a href={item.href} key={i} className="flex flex-col justify-between items-center w-1/4 group">
                            <ImagePreload classes="w-[250px] h-[150px] object-cover" src={item.img}/>
                            <div className="pt-3 w-[250px]">
                                <PreloadNewsItem title={item.title} date={item.date} href={item.href}/>
                            </div>
                        </a>
                    })}

                    <div className="absolute right-[-30px] top-[140px]">
                        <a href="/" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 hover:bg-gray-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>

                </div>
                
            </div>

            <div className="w-full mb-5">
                <span className="w-full bg-gray-400 h-[2px] block"></span>
            </div>

        </div>

        
    )
}