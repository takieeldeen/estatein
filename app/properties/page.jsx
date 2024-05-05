import Pagination from "@/components/searchProperty/Pagination";
import RequestForm from "@/components/searchProperty/RequestForm";
import SearchContainer, {
  SearchContainerSkeleton,
} from "@/components/searchProperty/SearchContainer";
import SearchForm from "@/components/searchProperty/SearchForm";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { getPagesCount } from "../../api/listings";

export default async function PropertiesPage({ searchParams }) {
  const pageCount = await getPagesCount(searchParams?.query);
  return (
    <>
      <header className="py-12 px-2 md:px-12 bg-gradient-to-l from-neutral-900 to-neutral-800">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Find your Dream Property
        </h1>
        <p className="text-sm text-neutral-200 md:text-base">
          Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey{" "}
        </p>
      </header>
      <section className="relative md:pt-36 z-20">
        <SearchForm />
      </section>
      <section className="px-4 py-6">
        <div className=" flex items-center justify-between">
          <div>
            <IoSparklesSharp className="text-xl text-neutral-500" />
            <h2 className="text-3xl font-semibold mb-3">
              Discover a world of Possibilities
            </h2>
            <p className="text-sm text-neutral-300 mb-4">
              Our portfolio of properties is as diverse as your dreams. Explore
              the following categories to find the perfect property that
              resonates with your vision of home
            </p>
          </div>
          <Link
            className="border-2 border-neutral-800 py-4 text-center text-sm rounded-md font-thin transition-all duration-300 hover:border-neutral-600 md:px-8 hidden md:block"
            href="/"
          >
            View All Properties
          </Link>
        </div>
        <Suspense fallback={<SearchContainerSkeleton />}>
          <SearchContainer searchParams={searchParams} />
        </Suspense>
        <Pagination pageCount={pageCount} />
      </section>
      {/* Create request section */}
      <section className="px-4 py-6 relative">
        <div className=" flex items-center justify-between">
          <div>
            <IoSparklesSharp className="text-xl text-neutral-500" />
            <h2 className="text-3xl font-semibold mb-3">
              Let&apos;s Make it Happen
            </h2>
            <p className="text-sm text-neutral-300 mb-4">
              Ready to take the first step toward your dream property? Fill out
              the form below, and our real estate wizards will work their magic
              to find your perfect match. Don&apos;t wait; let&apos;s embark on
              this exciting journey together.
            </p>
          </div>
        </div>
        {/* Special request form*/}
        <RequestForm />
      </section>
      <section className="px-12 py-8 md:py-24 relative overflow-hidden">
        <Image
          className="absolute top-1/2 -translate-y-1/2 md:top-0 left-0"
          src="/assets/images/bg-cta.png"
          height={258}
          width={550}
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
    </>
  );
}
