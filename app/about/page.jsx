import ExploreSection from "@/components/ExploreSection";
import SectionOpening from "@/components/SectionOpening";
import StatsItem from "@/components/StatsItem";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";

import ClientItem from "@/components/about/clientItem";
import Slider from "@/components/Slider";

const values = [
  {
    icon: "trust",
    title: "Trust",
    text: "Trust is the cornerstone of every successful real estate transaction",
  },
  {
    icon: "excellence",
    title: "Excellence",
    text: "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    icon: "clientCentric",
    title: "Client Centric",
    text: "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    icon: "commitment",
    title: "Our Commitment",
    text: "We are dedicated to providing you with the highest level of service, professionalism",
  },
];

const achievments = [
  {
    title: "3+ Years of Excellence",
    text: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
  },
  {
    title: "Happy Clients",
    text: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    text: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

const experience = [
  {
    title: "Discover a World of Possibilities",
    text: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,",
  },
  {
    title: "Narrowing Down Your Choices",
    text: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    title: "Personalized Guidance",
    text: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    title: "See It for Yourself",
    text: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    title: "Making Informed Decisions",
    text: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
  },
  {
    title: "Getting the Best Deal",
    text: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

const team = [
  {
    name: "Galal Hisham",
    role: "Founder",
    img: "team-0",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
    img: "team-1",
  },
  {
    name: "Islam Ahmed",
    role: "Head of Property Management",
    img: "team-2",
  },
  {
    name: "Michael Turner",
    role: "Legal Counsel",
    img: "team-3",
  },
];
export default function AboutPage() {
  return (
    <main className="w-full">
      <section className="py-8 px-4 w-full flex flex-col md:flex-row-reverse md:gap-2 md:justify-between md:px-12">
        {/* Hero Img */}
        <div className="w-full flex items-center justify-center md:max-w-[30rem]">
          <div className="h-96 w-full relative rounded-md overflow-hidden border-[1px] border-neutral-600 bg-neutral-900">
            <Image
              src="/assets/images/about/heroBg.png"
              className="object-cover"
              fill
            />
            <Image
              src="/assets/images/about/hero.png"
              className="object-cover"
              fill
            />
          </div>
        </div>
        {/* left container */}
        <div className="md:w-1/2">
          <div className=" py-8 mb-4 w-full">
            <SectionOpening
              title="Our Journey"
              text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
            />
          </div>
          {/* Stats */}
          <div className="grid grid-cols-6 gap-3 mb-12 w-full">
            <StatsItem title="happy customers" stat="200+" />
            <StatsItem title="Properties for clients" stat="10K+" />
            <StatsItem title="Years of Experience" stat="16+" size="large" />
          </div>
        </div>
      </section>
      {/* Values section */}
      <section className="py-8 px-4 md:flex md:gap-8 md:justify-between md:mx-10">
        <div className="mb-4 md:max-w-96">
          <SectionOpening
            title="Our Values"
            text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 border-[1px] border-neutral-800 rounded-md py-2 px-4 divide-y-[1px] divide-neutral-800 md:divide-y-0 md:border-4 md:gap-2 ">
          {values.map((value, index) => {
            return (
              <li key={index} className=" py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={`/assets/svg/about/${value.icon}.svg`}
                    height={34}
                    width={34}
                    alt={`${value.icon} icon`}
                  />
                  <strong>{value.title}</strong>
                </div>
                <p className="text-sm text-neutral-300">{value.text}</p>
              </li>
            );
          })}
        </ul>
      </section>
      {/* Achievments section */}
      <section className="py-8 px-4 md:px-10">
        <div className="mb-4">
          <SectionOpening
            title="Our Achievments"
            text="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          />
        </div>
        <ul className="flex flex-col gap-4 md:flex-row w-full">
          {achievments.map((achievment, index) => (
            <li
              className="border-2 border-neutral-800 p-4 rounded-md md:w-1/3"
              key={index}
            >
              <strong className="mb-6">{achievment.title}</strong>
              <p className="text-sm text-neutral-300">{achievment.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="px-4 py-8">
        <div className="mb-4">
          <SectionOpening
            title="Navigating the Estatein Experience"
            text="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          />
        </div>
        <ul className="flex flex-col gap-3 md:grid md:grid-cols-3">
          {experience.map((item, index) => (
            <li key={index}>
              <span className="text-xs font-bold capitalize px-2 border-l-[1px] border-purple-700/30 py-1">
                Step 0{index + 1}
              </span>
              <div className="p-6 bg-gradient-to-br from-purple-500/20 via-purple-700/0 via-15% to-purple-700/0">
                <strong className="mb-2 inline-block ">{item.title}</strong>
                <p className="text-sm text-neutral-300">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="px-4 py-8 md:px-10">
        <div className="mb-4">
          <SectionOpening
            title="Meet the Estatein Team"
            text="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
          />
        </div>
        <ul className="flex flex-col items-center gap-4 md:grid md:grid-cols-4">
          {team.map((member, index) => (
            <li
              key={index}
              className="w-72 p-4 border-[1px] rounded-lg border-neutral-800 flex flex-col items-center"
            >
              <div className="w-full max-w-72 h-64 relative rounded-md overflow-hidden">
                <Image
                  src={`/assets/images/about/${member.img}.png`}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative mb-8">
                <button className="bg-purple-800 absolute px-3 py-1 rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <FaTwitter className="text-xl" />
                </button>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <strong className="text-sm">{member.name}</strong>
                <span className="text-xs text-neutral-300 inline-block mb-3">
                  {member.role}
                </span>

                <form className="relative">
                  <input
                    className="w-full bg-neutral-900 py-2 pl-2 pr-6 rounded-full placeholder:text-neutral-100 placeholder:text-xs placeholder:font-semibold border-[1px] border-neutral-800 outline-none focus:outline-none"
                    type="text"
                    placeholder="Say Hello"
                    id="msg"
                  />
                  <button className="bg-purple-800 rounded-full p-2 absolute top-1/2 -translate-y-1/2 right-1 hover:bg-purple-700 transition-all duration-300">
                    <BsFillSendFill />
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="px-4 md:px-10 py-8">
        <div className="mb-4">
          <SectionOpening
            title="Our Valued Clients"
            text="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
          />
        </div>
        <Slider>
          <ClientItem />
          <ClientItem />
          <ClientItem />
          <ClientItem />
          <ClientItem />
        </Slider>
      </section>
      <ExploreSection />
    </main>
  );
}
