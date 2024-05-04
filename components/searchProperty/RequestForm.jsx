export default function RequestForm() {
  return (
    <form className="border-2 border-neutral-800 p-4 rounded-md flex flex-col gap-4 md:grid md:grid-cols-3">
      <div className="flex flex-col gap-3">
        <label htmlFor="first_name" className="text-sm font-semibold">
          First Name
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          id="first_name"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="last_name" className="text-sm font-semibold">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="last_name"
          id="last_name"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          id="email"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="phone" className="text-sm font-semibold">
          Phone
        </label>
        <input
          type="text"
          placeholder="Enter Your Phone"
          name="phone"
          id="phone"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="location" className="text-sm font-semibold">
          Preferred Location
        </label>
        <input
          type="text"
          placeholder="Enter Your Preferred Location"
          name="location"
          id="location"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="property_type" className="text-sm font-semibold">
          Property Type
        </label>
        <input
          type="text"
          placeholder="Property type"
          name="property_type"
          id="property_type"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="bedrooms" className="text-sm font-semibold">
          Number of Bedrooms
        </label>
        <input
          type="number"
          placeholder="Enter requested Number of Bedrooms"
          name="bedrooms"
          id="bedrooms"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="bathrooms" className="text-sm font-semibold">
          Number of Bathrooms
        </label>
        <input
          type="number"
          placeholder="Enter requested Number of Bathrooms"
          name="bathrooms"
          id="bathrooms"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="budget" className="text-sm font-semibold">
          Budget
        </label>
        <input
          type="number"
          placeholder="Enter Your Available Budget"
          name="budget"
          id="budget"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3 md:col-span-3">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          placeholder="Message"
          name="message"
          id="message"
          className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-purple-700 py-3 rounded-md hover:bg-purple-800 transition-all duration-300 md:col-start-3"
      >
        Send Your Message
      </button>
    </form>
  );
}
