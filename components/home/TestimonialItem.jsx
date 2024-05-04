import Image from "next/image";
import { FaStar } from "react-icons/fa";

function TestimonialItem() {
  return (
    <div className="border-2 border-neutral-800 p-6 rounded-md flex flex-col gap-5">
      <ul className="flex items-center gap-2">
        <li className="w-8 h-8 flex items-center justify-center bg-neutral-900 border-[1px] border-neutral-800 rounded-full">
          <FaStar className="text-yellow-500 text-xl" />
        </li>
        <li className="w-8 h-8 flex items-center justify-center bg-neutral-900 border-[1px] border-neutral-800 rounded-full">
          <FaStar className="text-yellow-500 text-xl" />
        </li>
        <li className="w-8 h-8 flex items-center justify-center bg-neutral-900 border-[1px] border-neutral-800 rounded-full">
          <FaStar className="text-yellow-500 text-xl" />
        </li>
        <li className="w-8 h-8 flex items-center justify-center bg-neutral-900 border-[1px] border-neutral-800 rounded-full">
          <FaStar className="text-yellow-500 text-xl" />
        </li>
      </ul>
      <div className="mb-6">
        <strong className="mb-3 inline-block">Exceptional Service</strong>
        <p className="text-sm">
          Our Experience with Estatein was outstanding. thier teams
          dedicationand profissionalism made finding our dream home a breeze.
          Highly recommended
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/assets/images/Ahmed Yasser.jpg"
          width={50}
          height={50}
          alt="Ahmed Yasser Profile Picture"
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">Ahmed Yasser</p>
          <address className="text-neutral-300">Ain Shams</address>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;

export function TestimonialItemSkeleton() {}
