import Image from "next/image";
import Link from "next/link";

export default function PropertyItem({ listing = {} }) {
  return (
    <div className="p-4 border-2 border-neutral-800 rounded-lg w-96 flex flex-col items-center flex-0 h-full">
      <div className="w-80 h-60 mb-4  relative">
        <Image
          className="object-contain"
          src={listing.prop_thumbnail}
          alt={listing.prop_title}
          fill
        />
      </div>
      <div className="px-6 mb-2">
        <p className="font-semibold text-lg">{listing.prop_title}</p>
        <p className="text-neutral-400 text-sm">
          An elegant {listing.prop_rooms}-bedroom, {listing.prop_bathrooms}{" "}
          bathroom {listing.prop_type} in a gated community
        </p>
      </div>
      <ul className="flex flex-wrap self-start px-6 gap-2 items-center mb-auto">
        <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl">
          <Image
            src="/assets/svg/bedroom.svg"
            width={20}
            height={20}
            alt="Bedroom Icon"
          />
          {listing.prop_rooms}-Bedroom
        </li>
        <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl">
          <Image
            src="/assets/svg/bathroom.svg"
            width={20}
            height={20}
            alt="Bathroom Icon"
          />
          {listing.prop_bathrooms}-Bathroom
        </li>
        <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl">
          <Image
            src="/assets/svg/Type.svg"
            width={20}
            height={20}
            alt="Property type icon Icon"
          />
          {listing.prop_type}
        </li>
      </ul>
      <div className="flex items-center self-stretch px-6 justify-between ">
        <p className="flex flex-col text-sm text-neutral-400">
          Price{" "}
          <span className="text-base text-white font-semibold">
            {listing.prop_price.toLocaleString("en-us")}
          </span>
        </p>
        <Link
          className="bg-purple-700 rounded-md text-center py-4 text-sm transition-all duration-300 hover:bg-purple-900 md:px-8 px-4"
          href={`/properties/${listing.id}`}
        >
          View Property Details
        </Link>
      </div>
    </div>
  );
}

export function PropertyItemSkelton() {
  return (
    <div className="w-96 h-96 animate-pulse p-4 border-2 border-neutral-800 rounded-lg flex flex-col items-center flex-0 ">
      <div className="w-80 h-60 mb-4 bg-neutral-800 relative rounded-lg"></div>
      <div className="px-6 mb-2 w-full flex flex-col items-start gap-2">
        <div className="w-full h-4 bg-neutral-800 rounded-full"></div>
        <div className="w-1/2 h-4 bg-neutral-800 rounded-full mb-4"></div>
        <div className="w-full h-2 bg-neutral-800 rounded-full"></div>
        <div className="w-full h-2 bg-neutral-800 rounded-full"></div>
        <div className="w-1/2 h-2 bg-neutral-800 rounded-full mb-4"></div>
      </div>
      <ul className="flex flex-wrap self-start px-6 gap-2 items-center mb-5">
        <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl h-6 w-24"></li>
        <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl h-6 w-24"></li>
        <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl h-6 w-24"></li>
      </ul>
      <div className="flex flex-col items-start gap-2 px-6 text-sm text-neutral-400 self-start">
        <div className="bg-neutral-800 h-2 w-12 rounded-full"></div>
        <div className="bg-neutral-800 h-4 w-20 rounded-full"></div>
      </div>
    </div>
  );
  // <div className="p-4 border-2 border-neutral-800 rounded-lg w-96 flex flex-col items-center flex-0 h-full">
  //   {/* Image skelton */}
  //   <div className="w-80 h-60 mb-4  relative"></div>
  //   {/* title and description skelton */}
  //   <div className="px-6 mb-2">
  //     <p className="font-semibold w-64 h-4"></p>
  //     <p className="text-neutral-400 text-sm">
  //       An elegant -bedroom, bathroom in a gated community
  //     </p>
  //   </div>
  //   <ul className="flex flex-wrap self-start px-6 gap-2 items-center mb-auto">
  //     <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl">
  //       <Image
  //         src="/assets/svg/bedroom.svg"
  //         width={20}
  //         height={20}
  //         alt="Bedroom Icon"
  //       />
  //       -Bedroom
  //     </li>
  //     <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl h-5 w-5"></li>
  //     <li className="flex items-center gap-2 flex-0 border-neutral-800 border-[1px] bg-neutral-900 text-sm px-2 py-1 rounded-3xl h-5 w-5"></li>
  //   </ul>
  //   <div className="flex items-center self-stretch px-6 justify-between ">
  //     <p className="flex flex-col text-sm text-neutral-400">
  //       Price <span className="text-base text-white font-semibold"></span>
  //     </p>
  //     {/* <Link
  //       className="bg-purple-700 rounded-md text-center py-4 text-sm transition-all duration-300 hover:bg-purple-900 md:px-8 px-4"
  //       href={`/properties/${listing.id}`}
  //     >

  //     </Link> */}
  //   </div>
  // </div>;
}
