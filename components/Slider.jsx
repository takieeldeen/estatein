"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Slider({ children }) {
  // if (!children) return null;
  if (children.length === 0) return null;
  let childrenArray = [];
  if (children.length === undefined) {
    childrenArray.push(children);
  } else {
    childrenArray = [...children];
  }

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      modules={[Pagination]}
      className="mySwiper h-auto"
      style={{ height: "auto" }}
    >
      {childrenArray?.map((child, i) => (
        <SwiperSlide key={i} style={{ width: "24rem" }}>
          {child}
        </SwiperSlide>
      ))}
      <div className="flex justify-between mt-4 items-center">
        <Link
          className="border-2 px-4 bg-neutral-900 md:hidden border-neutral-800 py-4 text-center text-sm rounded-md font-thin transition-all duration-300 hover:border-neutral-600 md:px-8"
          href="/"
        >
          View All Properties
        </Link>
        <div className="flex items-center gap-4 md:ml-auto">
          <SwiperButtonPrevious>
            <FaArrowLeft className="text-sm" />
          </SwiperButtonPrevious>
          <SwiperButtonNext>
            <FaArrowRight className="text-sm" />
          </SwiperButtonNext>
        </div>
      </div>
    </Swiper>
  );
}

function SwiperButtonNext({ children }) {
  const swiper = useSwiper();

  function handleSwipeNext() {
    swiper.slideNext();
  }

  return (
    <button
      className={`hover:bg-neutral-800 transition-all duration-300 cursor-pointer text-2xl border-[1px] border-neutral-700 flex items-center justify-center rounded-full w-8 h-8`}
      onClick={handleSwipeNext}
    >
      {children}
    </button>
  );
}
function SwiperButtonPrevious({ children }) {
  const swiper = useSwiper();
  function handleSwipeBack() {
    swiper.slidePrev();
  }

  return (
    <button
      className={`hover:bg-neutral-800 transition-all duration-300 cursor-pointer text-2xl border-[1px] border-neutral-700 flex items-center justify-center rounded-full w-8 h-8`}
      onClick={handleSwipeBack}
    >
      {children}
    </button>
  );
}
