import Image from "next/image";
import Link from "next/link";

function ExploreSection() {
  return (
    <section className="px-12 py-8 md:py-24 relative overflow-hidden">
      <Image
        className="absolute top-0 md:-translate-y-1/2 md:top-0 left-0"
        src="/assets/images/bg-cta.png"
        height={258}
        width={550}
        alt="background"
      />
      <div className="flex flex-col gap-4 z-20 relative md:flex-row items-center w-full justify-between">
        <div className="md:max-w-[50rem]">
          <h2 className="capitalize text-3xl font-bold mb-4">
            Start your real Estate journey today
          </h2>
          <p className="text-neutral-300">
            Your dream property is just a click away. Whether you&apos;re
            looking for a new home, a strategic investment, or expert real
            estate advice, Estatein is here to assist you every step of the way.
            Take the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Link
          href="/"
          className="bg-purple-700 rounded-md text-center py-4 text-sm transition-all duration-300 hover:bg-purple-900 px-6 md:px-8"
        >
          Explore Properties
        </Link>
      </div>
    </section>
  );
}

export default ExploreSection;
