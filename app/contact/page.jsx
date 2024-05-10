import ContactForm from "@/components/contact/ContactForm";
import ContactMethod from "@/components/contact/ContactMethod";
import SectionOpening from "@/components/SectionOpening";

import LocationItem from "@/components/contact/LocationItem";
import Image from "next/image";
import ExploreSection from "@/components/ExploreSection";

const contacts = [
  {
    type: "email",
    icon: "email",
    text: "info@estatein.com",
    link: "/contact",
  },
  {
    type: "phone",
    icon: "phone",
    text: "+1(123)-456-7890",
    link: "/contact",
  },
  {
    type: "headQuarters",
    icon: "headquarters",
    text: "Main Headquarters",
    link: "/contact",
  },
  {
    type: "linkedin",
    icon: "social",
    text: "Linkedin",
    link: "https://www.linkedin.com/takie-eldeen",
  },
];

function ContactPage() {
  return (
    <main>
      <section>
        <div className="px-4 py-12 md:px-24 bg-gradient-to-r from-neutral-800/70 via-30% via-neutral-950 to-neutral-950">
          <h2 className="text-2xl font-semibold mb-4 md:text-3xl">
            Get in Touch with Estatein
          </h2>
          <p className="text-neutral-300">
            Welcome to Estatein&apos;s Contact Us page. We&apos;re here to
            assist you with any inquiries, requests, or feedback you may have.
            Whether you&apos;re looking to buy or sell a property, explore
            investment opportunities, or simply want to connect, we&apos;re just
            a message away. Reach out to us, and let&apos;s start a
            conversation.
          </p>
        </div>
        <ul className="border-y-4 border-neutral-800 py-2 grid grid-cols-2 p-2 gap-2 md:grid-cols-4">
          {contacts.map((item, index) => (
            <ContactMethod key={index} method={item} />
          ))}
        </ul>
      </section>
      <section className="px-4 py-8">
        <div className="mb-4">
          <SectionOpening
            title="Let's Connect"
            text="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein."
          />
        </div>
        <ContactForm />
      </section>
      <section className="px-4 py-8">
        <div className="mb-4">
          <SectionOpening
            title="Discover Our Office Locations"
            text="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team."
          />
        </div>
        <ul className="bg-neutral-900 p-2 rounded-md grid grid-cols-3 gap-1 mb-4 max-w-96">
          <li className="bg-neutral-950 flex items-center justify-center p-2 py-3 rounded-md border-[1px] border-neutral-700 text-sm">
            All
          </li>
          <li className="bg-transparent flex items-center justify-center p-2 py-3 rounded-md border-[1px] border-neutral-700 text-sm">
            Regional
          </li>
          <li className="bg-transparent flex items-center justify-center p-2 py-3 rounded-md border-[1px] border-neutral-700 text-sm">
            International
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-4 mb-8 md:flex-row">
          <LocationItem />
          <LocationItem />
        </ul>
      </section>
      <section className="px-4 py-8 relative w-[95%] mx-auto rounded-md overflow-hidden border-[1px] border-neutral-800 h-auto md:px-12 md:py-12 mb-12">
        <Image
          src="/assets/images/contact/exploreBg.png"
          fill
          className="object-cover -z-10 bg-neutral-900"
          alt="Background Image"
        />
        <ul className="grid grid-cols-4 mb-8 gap-2 md:gap-4">
          <li className="relative w-full h-28 md:h-40 col-span-2 rounded-md overflow-hidden">
            <Image
              src="/assets/images/contact/explore-1.png"
              fill
              className="object-cover"
              alt="An Image showing estatein employees"
            />
          </li>
          <li className="relative w-full h-28 md:h-40 col-span-2 rounded-md overflow-hidden">
            <Image
              src="/assets/images/contact/explore-2.png"
              fill
              className="object-cover"
              alt="An Image showing estatein employees"
            />
          </li>
          <li className="relative w-full h-28 md:h-40 col-span-2 rounded-md overflow-hidden">
            <Image
              src="/assets/images/contact/explore-3.png"
              fill
              className="object-cover"
              alt="An Image showing estatein employees"
            />
          </li>
          <li className="relative w-full h-28 md:h-40 col-span-1 rounded-md overflow-hidden">
            <Image
              src="/assets/images/contact/explore-4.png"
              fill
              className="object-cover"
              alt="An Image showing estatein employees"
            />
          </li>
          <li className="relative w-full h-28 md:h-40 col-span-1 rounded-md overflow-hidden">
            <Image
              src="/assets/images/contact/explore-5.png"
              fill
              className="object-cover"
              alt="An Image showing estatein employees"
            />
          </li>
        </ul>
        <div className="md:flex md:flex-row">
          <div className="mb-4">
            <SectionOpening
              title="Explore Estatein's World"
              text="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
            />
          </div>
          <div className="w-full h-48 relative rounded-md overflow-hidden">
            <Image
              src="/assets/images/contact/explore-6.png"
              fill
              className="object-cover"
              alt="An Image showing estatein employees"
            />
          </div>
        </div>
      </section>
      <ExploreSection />
    </main>
  );
}

export default ContactPage;
