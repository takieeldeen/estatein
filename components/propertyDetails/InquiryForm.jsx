export default function InqueiryForm() {
  return (
    <section className="md:flex md:flex-row ">
      <div className="flex flex-col gap-3 mb-4 md:w-1/2">
        <h3 className="text-2xl font-bold">
          Inquiry about Seaside Serenity villa.
        </h3>
        <p className="text-sm text-neutral-300">
          Interested in this property? Fill out the form below, and our real
          estate experts will get back to you with more details, including
          scheduling a viewing and answering any questions you may have.
        </p>
      </div>
      <form className="border-2 border-neutral-800 p-4 rounded-md flex flex-col gap-4 md:grid md:grid-cols-2 md:w-1/2">
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
            Selected Property
          </label>
          <input
            type="text"
            placeholder="Selected Property"
            name="location"
            id="location"
            className="bg-neutral-900 px-4 py-2 rounded-md placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
          />
        </div>

        <div className="flex flex-col gap-3 md:col-span-2">
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
          className="bg-purple-700 py-3 rounded-md hover:bg-purple-800 transition-all duration-300 md:col-start-2"
        >
          Send Your Message
        </button>
      </form>
    </section>
  );
}
