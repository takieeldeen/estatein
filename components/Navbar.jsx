"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Properties",
    link: "/properties",
  },
  {
    name: "About",
    link: "/about",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(pathname);
  return (
    <nav className="px-8 py-4 bg-neutral-800 flex items-center justify-between relative">
      {/* Logo Container */}
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/svg/logo.svg"
            height={25}
            width={25}
            alt="ESTATEIN Logo"
            priority
          />
          <strong>Estatein</strong>
        </div>
      </Link>
      {/* Toggle Button */}
      <button className="text-2xl md:hidden" onClick={() => setOpened(!opened)}>
        <HiMenuAlt2 />
      </button>
      {opened && (
        <div className="absolute top-0 left-0 h-screen w-screen bg-neutral-800 z-40 overflow-hidden flex items-center justify-center ">
          <Link href="/">
            {/* Logo Container */}
            <div className="flex items-center gap-2 absolute top-5 left-5">
              <Image
                src="/assets/svg/logo.svg"
                height={25}
                width={25}
                alt="ESTATEIN Logo"
                priority
              />
              <strong>Estatein</strong>
            </div>
          </Link>
          <ul className="flex flex-col gap-4 items-center">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  onClick={() => setActive(page.name)}
                  className={`px-4 py-2 rounded-md  ${
                    active === page.link
                      ? "bg-neutral-900 cursor-default"
                      : "bg-transparent border-[1px] border-transparent  hover:border-neutral-700 transition-all duration-300"
                  }`}
                  href={page.link}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="absolute z-40 top-5 right-5 text-xl "
            onClick={() => setOpened(!opened)}
          >
            <IoMdClose />
          </button>
          <Link
            onClick={() => setActive("/contact")}
            className={`px-4 py-2 rounded-md bg-neutral-900 absolute bottom-10 hover:bg-neutral-950 transition-all duration-300`}
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      )}
      <ul className="md:flex items-center hidden gap-2">
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              onClick={() => setActive(page.link)}
              className={`px-4 py-2 rounded-md  ${
                active === page.link
                  ? "bg-neutral-900 cursor-default"
                  : "bg-transparent border-[1px] border-transparent  hover:border-neutral-700 transition-all duration-300"
              }`}
              href={page.link}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        onClick={() => setActive("/contact")}
        className={`hidden md:block px-4 py-2 rounded-md bg-neutral-900   hover:bg-neutral-950 transition-all duration-300`}
        href="/contact"
      >
        Contact Us
      </Link>
    </nav>
  );
}

export default Navbar;
