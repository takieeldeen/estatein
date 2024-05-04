import Image from "next/image";
import Link from "next/link";

function SearchItem({ listing }) {
  return (
    <li className="border-[1px] border-neutral-800 p-2 rounded-lg flex gap-4 bg-neutral-900 max-w-[60rem]">
      <div className=" h-48 w-[30rem] overflow-hidden rounded-lg relative">
        <Image
          className="object-cover "
          src={listing.prop_thumbnail}
          fill
          alt="Property listing Image"
          quality={20}
        />
        <p className="absolute top-2 left-2 bg-neutral-800 py-1 px-2 rounded-full text-xs font-semibold tracking-wide">
          {listing.prop_type}
        </p>
      </div>
      <div className="py-4  w-full flex flex-col items-start">
        <p className="text-neutral-400 text-sm">{listing.prop_location}</p>
        <p className="text-xl font-semibold">{listing.prop_title}</p>
        <ul className="flex gap-2 divide-x divide-neutral-300 mb-auto">
          <li className="p-2 flex flex-col items-center ">
            <Image
              src="/assets/svg/bedroom.svg"
              width={20}
              height={20}
              alt="Bedroom Icon"
            />
            <span>{listing.prop_rooms} Rooms</span>
          </li>
          <li className="p-2 flex flex-col items-center">
            <Image
              src="/assets/svg/bedroom.svg"
              width={20}
              height={20}
              alt="Bedroom Icon"
            />
            <span>{listing.prop_bathrooms} Baths</span>
          </li>
          <li className="p-2 flex flex-col items-center">
            <Image
              src="/assets/svg/Type.svg"
              width={20}
              height={20}
              alt="Bedroom Icon"
            />
            {listing.prop_area} m
          </li>
        </ul>
        <Link
          href={`/properties/${listing.id}`}
          className="border-2 border-purple-700 px-2 py-2 rounded-full text-purple-500 text-sm transition-all duration-300 hover:bg-purple-700 hover:text-purple-100 self-end"
        >
          Read More
        </Link>
      </div>
    </li>
  );
}

export function SearchItemSkeleton() {
  return (
    <li className="border-[1px] border-neutral-800 p-2 rounded-lg flex gap-4 bg-neutral-900 max-w-[60rem] min-h-48 animate-pulse">
      <div className=" min-h-48 w-[30rem] overflow-hidden rounded-lg relative bg-neutral-800">
        <div className="absolute top-2 left-2 py-1 px-2 rounded-full w-16 h-6 bg-neutral-900"></div>
      </div>
      <div className="py-4  w-full flex flex-col items-start gap-2 mb-auto">
        <div className="w-16 h-2 bg-neutral-800 rounded-full"></div>
        <div className="w-4/5 h-4 bg-neutral-800 rounded-full"></div>
      </div>
      <div className="h-10 w-48 rounded-full self-end bg-neutral-800"></div>
    </li>
  );
}

export default SearchItem;
