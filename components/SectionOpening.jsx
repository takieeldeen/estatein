import Image from "next/image";
import { IoSparklesSharp } from "react-icons/io5";

function SectionOpening({ title = "", text = "" }) {
  return (
    <>
      <IoSparklesSharp className="text-xl text-neutral-500" />

      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-neutral-300">{text}</p>
    </>
  );
}

export default SectionOpening;
