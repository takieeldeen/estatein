import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function LocationItem() {
  return (
    <li className="p-4 border-[1px] border-neutral-800 rounded-md">
      <p className="text-sm font-semibold mb-2">Main Headquarters</p>

      <strong className="text-2xl mb-4 inline-block">
        123 Estatein Plaza, City Center, Metropolis
      </strong>
      <p className="text-sm text-neutral-300 mb-6">
        Our main headquarters serve as the heart of Estatein. Located in the
        bustling city center, this is where our core team of experts operates,
        driving the excellence and innovation that define us.
      </p>
      <ul className="flex items-center py-2 flex-wrap gap-3 mb-3">
        <li className="flex items-center gap-2 bg-neutral-900 p-2 text-sm rounded-full border-[1px] border-neutral-800 flex-0 font-semibold">
          <MdEmail />
          info@estatein.com
        </li>
        <li className="flex items-center gap-2 bg-neutral-900 p-2 text-sm rounded-full border-[1px] border-neutral-800 flex-0 font-semibold">
          <FaPhoneAlt />
          +1(234)-567-7890
        </li>
        <li className="flex items-center gap-2 bg-neutral-900 p-2 text-sm rounded-full border-[1px] border-neutral-800 flex-0 font-semibold">
          <FaLocationDot />
          Metropolis
        </li>
      </ul>
      <button className="text-center w-full bg-purple-700 py-3 rounded-md text-sm">
        Get Directions
      </button>
    </li>
  );
}

export default LocationItem;
