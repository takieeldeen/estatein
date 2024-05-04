// "use client";
import supabase from "@/api/supabase";
import ExploreSection from "@/components/ExploreSection";
import InqueiryForm from "@/components/propertyDetails/InquiryForm";
import AdditionalCosts from "@/components/propertyDetails/AdditionalCosts";
import Gallery from "@/components/propertyDetails/Gallery";
import Image from "next/image";
import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";

export default async function PropertyDetailsPage({ params }) {
  const propertySlug = params.propertySlug;
  let propertyDetails;

  try {
    let { data, error } = await supabase
      .from("listings")
      .select("*")
      .eq("id", propertySlug);
    if (error) throw new Error(error);
    [propertyDetails] = data;
  } catch (err) {
    if (err) throw new Error(err.message);
  }

  return (
    <main className="py-12 px-2 flex flex-col gap-4 md:px-16">
      <section>
        <div className="flex flex-col items-start mb-4">
          <div className="flex flex-col gap-2 items-start md:flex-row">
            <h2 className="font-bold text-xl">{propertyDetails.prop_title}</h2>
            <p className="flex items-center gap-2 border-[1px] border-neutral-800 rounded-md px-2 py-1 text-sm">
              <FaLocationPin />
              {propertyDetails.prop_location}
            </p>
          </div>
          <div className="flex items-start text-sm text-neutral-400  self-end gap-2">
            price
            <span className="text-neutral-100 text-xl">
              {propertyDetails.prop_price.toLocaleString("en-us", {
                style: "currency",
                currency: "EGP",
              })}
            </span>
          </div>
        </div>
        <Gallery images={propertyDetails.prop_images} />
      </section>
      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-start w-full">
          <div className="border-[1px] border-neutral-600 p-4 py-6 rounded-md md:w-1/2">
            <div className="flex flex-col gap-3 mb-4">
              <strong>Description</strong>
              <p className="text-sm text-neutral-300">
                {propertyDetails.prop_description}
              </p>
            </div>
            <ul className="grid grid-cols-2 border-t-[1px] border-neutral-600 p-2 gap-4">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <Image
                    src="/assets/svg/bedroom.svg"
                    width={15}
                    height={15}
                    alt="bedroom"
                  />
                  Bedrooms
                </div>
                <span className="font-semibold text-2xl">
                  {propertyDetails.prop_rooms}
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <Image
                    src="/assets/svg/bathroom.svg"
                    width={15}
                    height={15}
                    alt="bathroom"
                  />
                  Bathrooms
                </div>
                <span className="font-semibold text-2xl">
                  {propertyDetails.prop_bathrooms}
                </span>
              </li>
              <li className="flex flex-col gap-1 col-span-2 border-t-[1px] border-neutral-600 pt-2">
                <div className="flex items-center gap-2 text-neutral-400 text-sm">
                  <Image
                    src="/assets/svg/bedroom.svg"
                    width={15}
                    height={15}
                    alt="bedroom"
                  />
                  Area
                </div>
                <span className="font-semibold text-xl">
                  {propertyDetails.prop_area} Square Feet
                </span>
              </li>
            </ul>
          </div>
          <div className="border-[1px] border-neutral-600 p-4 py-6 rounded-md md:w-1/2">
            <div className="flex flex-col gap-3 mb-4 md:gap-5">
              <strong>Key Features and Amenities</strong>
              <ul className="flex flex-col gap-4 md:gap-6">
                {propertyDetails.prop_amenities.map((amenity, i) => (
                  <li
                    key={i}
                    className="bg-gradient-to-r from-neutral-900/60 to-neutral-950/15 p-2 border-l-2 border-purple-800 flex items-center gap-2 text-neutral-400 text-sm md:p-4"
                  >
                    <MdElectricBolt className="text-white text-lg" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InqueiryForm />
      <AdditionalCosts propertyDetails={propertyDetails} />
      <ExploreSection />
    </main>
  );
}
