"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AutoCompleteItem from "./AutoCompleteItem";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useAutoComplete } from "@/hooks/useAutoComplete";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query")?.toString());
  const [focus, setFocus] = useState(false);
  const pathname = usePathname();
  const { replace } = useRouter();
  // function to handle submitting search
  function handleSubmit(e) {
    // Prevent form from reloading
    e.preventDefault();
    const term = e.target[0].value;
    // Instantiate URLSearchParams to manipulate search parameters;
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");
    // Check If there a search query or not
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
      params.delete("page");
    }
    // Change the url without leaving the page
    replace(`${pathname}?${params.toString()}`);
    // set focus off the input
    setFocus(false);
  }
  //Auto Complete logic
  const { isLoading, autoCompleteResults } = useAutoComplete(query);
  console.log(autoCompleteResults);
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="py-8 px-2 w-full md:absolute md:-translate-y-1/2 md:-translate-x-1/2 md:left-1/2 md:top-0 md:max-w-[60rem] "
    >
      <div className="flex items-center justify-center relative">
        <input
          autoFocus={focus}
          placeholder="Search for Property"
          type="text"
          required
          name="property_name"
          id="name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
          className="py-2 pl-2  pr-9 md:py-5 md:pl-4 md:bg-neutral-900 bg-neutral-800 rounded-md placeholder:text-neutral-400 placeholder:text-sm md:placeholder:text-base w-full outline-none focus:outline-none focus:shadow-lg  focus:shadow-neutral-400/10 transition-all duration-300 md:border-8 md:border-neutral-800"
        />
        {isLoading && (
          <div className="w-6 h-6 border-2 border-purple-700 rounded-full border-l-0 border-t-0 animate-spin absolute md:right-[12rem] right-16"></div>
        )}

        <button
          type="submit"
          className="flex items-center gap-2 absolute top-1/2 -translate-y-1/2 right-1 md:right-5 bg-purple-700 px-4 py-2 md:py-3 rounded-md  hover:bg-purple-800 transition-all duration-300"
        >
          <FaSearch />
          <span className="hidden md:block">Find Property</span>
        </button>
        {/* AutoComplete Items */}
        <ul
          onBlur={() => setFocus(false)}
          className="w-full  absolute shadow-lg shadow-neutral-500/10 -bottom-1 translate-y-[100%] z-50 rounded-md overflow-hidden divide-y-[1px] divide-neutral-700"
        >
          {query !== "" &&
            focus &&
            autoCompleteResults?.length > 0 &&
            autoCompleteResults.map((result, i) => (
              <AutoCompleteItem key={i} result={result} />
            ))}
        </ul>
      </div>
    </form>
  );
}
