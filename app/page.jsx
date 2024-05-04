import FeaturedListings from "@/components/home/FeaturedListings";
import TestimonialItem from "@/components/home/TestimonialItem";
import Slider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";
import { IoSparklesSharp } from "react-icons/io5";

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <header className="px-12 md:px-0 md:grid md:grid-cols-2 p-2 md:p-0 md:gap-4 mb-12">
        <div className="h-96 md:h-full relative w-96 md:w-full mx-auto bg-neutral-900 overflow-hidden rounded-xl md:rounded-none m-4 md:m-0">
          <Image
            className="object-contain rounded-2xl z-20"
            src="/assets/images/hero.png"
            alt="hero"
            fill
          />
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[60rem] md:h-[54rem]  w-[30rem] h-[30rem] ">
            <img
              src="./assets/svg/container.svg"
              alt="container"
              className="object-contain w-[60rem] md:w-[90rem]"
            />
          </div>
        </div>
        {/* Actions container */}
        <div className="md:p-12">
          <h1 className="text-3xl font-semibold mb-4">
            Discover your dream property with Estatein
          </h1>
          <p className="text-sm text-neutral-300 mb-8">
            Your journey to find the perfect property begins here. Explore our
            listings to find the home that matches your dreams.
          </p>
          <div className="flex flex-col gap-4 mb-4 md:flex-row">
            <Link
              href="/properties"
              className="border-2 border-neutral-800 py-4 text-center text-sm rounded-md font-thin transition-all duration-300 hover:border-neutral-600 md:px-8"
            >
              Learn More
            </Link>
            <Link
              href="/properties"
              className="bg-purple-700 rounded-md text-center py-4 text-sm transition-all duration-300 hover:bg-purple-900 md:px-8"
            >
              Browse Properties
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-6 gap-3 mb-12">
            <div className="col-span-3 md:col-span-2 flex flex-col gap-1 items-center p-4 bg-neutral-900 text-4xl font-bold rounded-lg border-neutral-800 border-2">
              200+{" "}
              <span className="text-sm font-normal text-neutral-300">
                Happy Customers
              </span>
            </div>
            <div className="col-span-3 md:col-span-2 flex flex-col gap-1 items-center p-4 bg-neutral-900 text-4xl font-bold rounded-lg border-neutral-800 border-2">
              10k+{" "}
              <span className="text-sm font-normal text-neutral-300">
                Properties for clients
              </span>
            </div>
            <div className="col-span-6 md:col-span-2 flex flex-col gap-1 items-center p-4 bg-neutral-900 text-4xl font-bold rounded-lg border-neutral-800 border-2">
              16+{" "}
              <span className="text-sm font-normal text-neutral-300">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="grid grid-cols-4 gap-4 md:col-span-2 md:px-4">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2 justify-center items-center p-4 bg-neutral-900 text-sm font-semibold tracking-wide rounded-lg border-neutral-800 border-2 text-center">
            <img src="./assets/svg/feature-1.svg" />
            <p>Find your dream home</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2 justify-center items-center p-4 bg-neutral-900 text-sm font-semibold tracking-wide rounded-lg border-neutral-800 border-2 text-center">
            <img src="./assets/svg/feature-2.svg" />
            <p>Unlock property value</p>
          </div>
          <div className="col-span-2  md:col-span-1 flex flex-col gap-2 justify-center items-center p-4 bg-neutral-900 text-sm font-semibold tracking-wide rounded-lg border-neutral-800 border-2 text-center">
            <img src="./assets/svg/feature-3.svg" />
            <p>Effortless property management</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2 justify-center items-center p-4 bg-neutral-900 text-sm font-semibold tracking-wide rounded-lg border-neutral-800 border-2 text-center">
            <img src="./assets/svg/feature-4.svg" />
            <p>Smart investments, informed Decisions</p>
          </div>
        </div>
      </header>
      {/* Featured Listings Section */}
      <FeaturedListings />
      {/* Clients Section */}
      <section className="px-12 py-6">
        <div className=" flex items-center justify-between">
          <div>
            <IoSparklesSharp className="text-xl text-neutral-500" />
            <h2 className="text-3xl font-semibold mb-3 capitalize">
              What our clients say
            </h2>
            <p className="text-sm text-neutral-300 mb-4">
              Read the success stories and heartfelt testimonials from our value
              clients. Discover why they choose Estatein for their real state
              needs.
            </p>
          </div>
          <Link
            className="border-2 border-neutral-800 py-4 text-center text-sm rounded-md font-thin transition-all duration-300 hover:border-neutral-600 md:px-8 hidden md:block"
            href="/"
          >
            View All Testimonials
          </Link>
        </div>
        {/* Testimonial Container */}
        <Slider>
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </Slider>
      </section>
      <section className="px-12 py-8 md:py-24 relative overflow-hidden">
        <Image
          className="absolute top-0 left-0"
          src="/assets/images/bg-cta.png"
          height={129}
          width={275}
          alt="background"
        />
        <div className="flex flex-col gap-4 z-20 relative md:flex-row items-center w-full justify-between">
          <div className="md:max-w-[50rem]">
            <h2 className="capitalize text-3xl font-bold mb-4">
              Start your real Estate journey today
            </h2>
            <p className="text-neutral-300">
              Your dream property is just a click away. Whether you&apos;re
              looking for a new home, a strategic investment, or expert real
              estate advice, Estatein is here to assist you every step of the
              way. Take the first step towards your real estate goals and
              explore our available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <Link
            href="/"
            className="bg-purple-700 rounded-md text-center py-4 text-sm transition-all duration-300 hover:bg-purple-900 px-6 md:px-8"
          >
            Explore Properties
          </Link>
        </div>
      </section>
    </main>
  );
}
