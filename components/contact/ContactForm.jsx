import Input from "../Input";

function ContactForm() {
  return (
    <form className="border-[1px] border-neutral-800 rounded-md p-4 flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-5">
      <Input
        label={"First Name"}
        placeholder={"Enter First Name"}
        type="text"
        id="first_name"
        name="first_name"
      />
      <Input
        label={"Last Name"}
        placeholder={"Enter Last Name"}
        type="text"
        id="last_name"
        name="last_name"
      />
      <Input
        label={"Email"}
        placeholder={"Enter your Email"}
        type="email"
        id="email"
        name="email"
      />
      <Input
        label={"Phone"}
        placeholder={"Enter Phone Number"}
        type="text"
        id="phone"
        name="phone"
      />
      <Input
        label={"Inquiry Type"}
        placeholder={"Select Inquiry Type"}
        type="text"
        id="type"
        name="type"
      />
      <Input
        label={"How Did You Hear About Us?"}
        placeholder={"How did You Hear About Us?"}
        type="text"
        id="hearing"
        name="hearing"
      />
      <div className="flex flex-col gap-3 md:col-span-3">
        <label htmlFor="" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          className="bg-neutral-900 px-4 py-2 rounded-md  placeholder:text-neutral-500 placeholder:text-sm w-full border-[1px] border-neutral-700 outline-none focus:outline-none focus:shadow-md focus:shadow-neutral-400/15 transition-all duration-300"
          placeholder="Message"
        />
      </div>
      <button className="py-2 px-4 bg-purple-800 rounded-md hover:bg-purple-700 transition-all duration-300 col-start-3">
        Send Your Message
      </button>
    </form>
  );
}

export default ContactForm;
