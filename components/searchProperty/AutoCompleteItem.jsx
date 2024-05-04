import Image from "next/image";
import Link from "next/link";
import { FaLocationPin } from "react-icons/fa6";

function AutoCompleteItem({ result }) {
  return (
    <li>
      <Link href={`/properties/${result.id}`}>
        <div className="w-full p-2 bg-neutral-800 hover:bg-neutral-900 flex gap-2">
          <div className="w-64 h-48 md:w-48 md:h-24 bg-neutral-900 rounded-md overflow-hidden relative">
            <Image
              src={result.prop_thumbnail}
              fill
              alt="Se"
              className="object-cover"
            />
          </div>
          <div className="text-sm flex flex-col w-full">
            <div className="flex gap-4">
              <strong>{result.prop_title}</strong>
              <p className=" flex items-center gap-1 text-purple-300">
                <FaLocationPin className="text-purple-700" />
                {result.prop_location}
              </p>
            </div>
            <ul className="flex gap-2 divide-x divide-neutral-300 mb-auto">
              <li className="p-2 flex flex-col items-center ">
                <Image
                  src="/assets/svg/bedroom.svg"
                  width={15}
                  height={15}
                  alt="Bedroom Icon"
                />
                <span>{result.prop_rooms} Rooms</span>
              </li>
              <li className="p-2 flex flex-col items-center">
                <Image
                  src="/assets/svg/bedroom.svg"
                  width={15}
                  height={15}
                  alt="Bedroom Icon"
                />
                <span>2 {result.prop_bathrooms}</span>
              </li>
              <li className="p-2 flex flex-col items-center">
                <Image
                  src="/assets/svg/Type.svg"
                  width={15}
                  height={15}
                  alt="Bedroom Icon"
                />
                {result.prop_area} m
              </li>
            </ul>

            <p className="self-end text-lg font-semibold">
              {result.prop_price.toLocaleString("en-us", {
                style: "currency",
                currency: "EGP",
              })}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default AutoCompleteItem;
