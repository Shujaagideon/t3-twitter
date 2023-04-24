// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

export default function FeaturesCards() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-1/6 h-72 mt-14"
      >
        <SwiperSlide className="flex justify-center items-center rounded-lg shadow-sm bg-slate-100">Slide 1</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center rounded-lg shadow-sm bg-slate-100">Slide 2</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center rounded-lg shadow-sm bg-slate-100">Slide 3</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center rounded-lg shadow-sm bg-slate-100">Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
