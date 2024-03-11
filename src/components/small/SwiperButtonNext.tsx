import React from "react";
import { useSwiper } from "swiper/react";

interface ISwiperText {
    children: React.ReactNode;
}

export const SwiperButtonNext = ({ children }:ISwiperText) => {
  const swiper = useSwiper();
  return <button className="active:bg-gray-200 rounded-md px-2" onClick={() => swiper.slideNext()}>{children}</button>;
};