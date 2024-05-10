import { CiGrid41 } from "react-icons/ci";
import { HiOutlineBolt } from "react-icons/hi2";
function ClientItem() {
  return (
    <div className="p-4 border-[1px] border-neutral-800 rounded-md flex flex-col">
      <span className="text-xs text-neutral-300 font-semibold inline-block mb-2">
        Since 2019
      </span>
      <strong className="mb-3">ABC Corporation</strong>
      <button className="bg-neutral-900 text-sm py-3 rounded-md border-[1px] border-neutral-800">
        Visit Website
      </button>
      <ul className="grid grid-cols-2 p-2 divide-x-[1px] divide-neutral-600">
        <li className="p-4">
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <CiGrid41 className="text-xl" />
            Domain
          </div>
          Commercial Real Estate
        </li>
        <li className="p-4">
          <div className=" flex items-center gap-2 text-sm text-neutral-400">
            <HiOutlineBolt />
            Category
          </div>
          Luxury Home Development
        </li>
      </ul>
      <div className="p-5 py-6 border-[1px] border-neutral-800 rounded-md flex flex-col gap-2">
        <p className="text-neutral-400">What They Said</p>
        <p className="text-neutral-200">
          Estatein&apos;s expertise in finding the perfect office space for our
          expanding operations was invaluable. They truly understand our
          business needs.
        </p>
      </div>
    </div>
  );
}

export default ClientItem;
