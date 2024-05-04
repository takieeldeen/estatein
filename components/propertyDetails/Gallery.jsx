"use client";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
// Swiper Imports
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
// CSS Styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

function Gallery({ images }) {
  return (
    <>
      <div className="bg-neutral-800 p-4 rounded-md border-[1px] border-neutral-600 mb-4 md:p-8">
        <div className="flex flex-col gap-4 md:items-center">
          <div className="w-full h-auto rounded-md  drop-shadow-md">
            <Swiper
              spaceBetween={30}
              // pagination={{
              // clickable: true,
              // }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {images.map((image, i) => (
                <SwiperSlide key={i} className="mb-8  ">
                  <div className="w-full h-96 rounded-md overflow-hidden drop-shadow-md">
                    <Image
                      src={image}
                      fill
                      alt="Twin house Villa"
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <GalleryControl images={images} />
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
function GalleryControl({ images }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiper = useSwiper();
  return (
    <>
      <ul className="hidden md:flex flex-row justify-center gap-3 bg-neutral-900 p-2 rounded-md mb-4 ">
        {images.map((image, i) => (
          <li
            key={i}
            className="w-48 h-24 overflow-hidden relative rounded-md "
          >
            <Image
              src={image}
              fill
              quality={25}
              alt="Twin house Villa"
              className={`object-cover ${
                swiper.activeIndex === i ? "opacity-100" : "opacity-65"
              } cursor-pointer`}
              onClick={() => {
                swiper.slideTo(i);
                setActiveSlide(i);
              }}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between bg-neutral-900 p-2 rounded-[9999px] md:gap-4 md:max-w-[20rem] md:mx-auto">
        <button
          className="text-neutral-400 w-12 h-12 flex items-center justify-center rounded-full border-2 border-neutral-600 text-xl hover:border-neutral-400 transition-all duration-300 hover:text-neutral-300"
          onClick={() => {
            swiper.slidePrev();
            setActiveSlide(swiper.activeIndex);
          }}
        >
          <FaLongArrowAltLeft />
        </button>
        <ul className="flex gap-1 font-extrabold text-neutral-600">
          {images.map((image, i) => (
            <li
              className={`cursor-pointer ${
                activeSlide === i ? "text-neutral-100" : ""
              }`}
              onClick={() => {
                swiper.slideTo(i);
                setActiveSlide(swiper.activeIndex);
              }}
            >
              &ndash;
            </li>
          ))}
        </ul>
        <button
          className="text-neutral-400 w-12 h-12 flex items-center justify-center rounded-full border-2 border-neutral-600 text-xl hover:border-neutral-400 transition-all duration-300 hover:text-neutral-300"
          onClick={() => {
            swiper.slideNext();
            setActiveSlide(swiper.activeIndex);
          }}
        >
          <FaLongArrowAltRight />
        </button>
      </div>
    </>
  );
}
export default Gallery;
