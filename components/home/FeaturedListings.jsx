"use client";
import Link from "next/link";
import { IoSparklesSharp } from "react-icons/io5";
import React from "react";
import Slider from "../Slider";
import useSWR from "swr";
import { getFeaturedListings } from "@/api/listings";
import PropertyItem, { PropertyItemSkelton } from "./PropertyItem";
import { Suspense } from "react";

export default function FeaturedListings() {
  const {
    data: listings,
    error,
    isLoading,
  } = useSWR("/api/featured", getFeaturedListings);

  return (
    <section className="px-12 py-6">
      <div className=" flex items-center justify-between">
        <div>
          <IoSparklesSharp className="text-xl text-neutral-500" />
          <h2 className="text-3xl font-semibold mb-3">Featured Properties</h2>
          <p className="text-sm text-neutral-300 mb-4">
            Explore our handpicked featured properties. Each listings offers a
            glimpse into exceptional homes and investments available through
            Estatein.
          </p>
        </div>
        <Link
          className="border-2 border-neutral-800 py-4 text-center text-sm rounded-md font-thin transition-all duration-300 hover:border-neutral-600 md:px-8 hidden md:block"
          href="/properties"
        >
          View All Properties
        </Link>
      </div>

      <Slider>
        {isLoading ? (
          <>
            <PropertyItemSkelton />
          </>
        ) : (
          listings?.map((listing, i) => (
            <PropertyItem key={i} listing={listing} />
          ))
        )}
      </Slider>
    </section>
  );
}
