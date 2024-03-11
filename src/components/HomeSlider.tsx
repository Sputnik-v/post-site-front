import React, { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { SwiperButtonNext } from './small/SwiperButtonNext';
import { SwiperButtonPrev } from './small/SwiperButtonPrev';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const newsSlider = [
    {
        title: 'Ther is title from news',
        date: 'December 21, 2023',
        description: 'Lorem, ipsum dolor sit amet consectetur  aut delectus rerum accusantium repellat illo ullam eius amet quae, exercitationem facere quibusdam? Doloribus odio, sint dolore soluta nisi labore ab?',
        imgSrc: "/assets/images/11.jpg",
        urlNews: '/',
    },
    {
        title: 'Ther is I am for two',
        date: 'May 21, 2022',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem earum incidunt natus voluptate  eius amet quae, exercitationem facere quibusdam? Doloribus odio, sint dolore soluta nisi labore ab?',
        imgSrc: "/assets/images/22.jpeg",
        urlNews: '/',
    },
    {
        title: 'Ther is title is net news',
        date: 'March 21, 2023',
        description: 'Lorem, Rem earum incidunt natus voluptate aut delectus rerum accusantium repellat illo ullam eius amet quae, exercitationem facere quibusdam? Doloribus odio, sint dolore soluta nisi labore ab?',
        imgSrc: "/assets/images/33.jpg",
        urlNews: '/',
    },
]

export const HomeSlider = () => {


    const [news, setNews] = useState(newsSlider);

    return (
        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        autoplay={true}
        >

            {news.map((item, i) => {
                return <SwiperSlide key={i}>
                    <div className='flex flex-col gap-3'>
                        <img src={item.imgSrc} alt="news" />
                        <a href={item.urlNews} className='text-xl text-gray-700 font-bold hover:bg-gray-100'>{item.title}</a>
                        <p className='text-sm text-gray-500'>{item.date}</p>
                        <a href={item.urlNews} className='text-gray-600 hover:bg-gray-100'>{(item.description).slice(0, 120) + ' ...'}</a>
                    </div>
                </SwiperSlide>
            })}

            <div className='flex justify-end mt-2 mr-5'>
                <SwiperButtonPrev>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 opacity-50">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>

                </SwiperButtonPrev>

                <SwiperButtonNext>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 opacity-50">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>

                </SwiperButtonNext>
            </div>
            
        </Swiper>
    )
}