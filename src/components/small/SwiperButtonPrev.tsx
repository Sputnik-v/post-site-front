import { useSwiper } from "swiper/react";

interface ISwiperTextPrev {
    children: React.ReactNode;
}

export const SwiperButtonPrev = ({children}:ISwiperTextPrev) => {
    const swiper = useSwiper();
    return <button className="active:bg-gray-200 rounded-md px-2 mr-1" onClick={() => swiper.slidePrev()}>{children}</button>;
}