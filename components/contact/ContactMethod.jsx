import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

function ContactMethod({ method }) {
  return (
    <li className="bg-neutral-900 rounded-md flex flex-col items-center p-4 gap-2 relative">
      <Link href={method.link}>
        <MdArrowOutward className="absolute top-2 right-2 text-2xl text-neutral-600" />
      </Link>
      <Image
        src={`/assets/svg/contact/${method.icon}.svg`}
        height={48}
        width={48}
      />
      <span className="text-sm font-semibold">{method.text}</span>
    </li>
  );
}

export default ContactMethod;
