"use client";

import { getCounts } from "@/api/listings";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({ pageCount }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = +searchParams.get("page") || 1;
  const { replace } = useRouter();

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams();
    const query = searchParams.get("query");
    params.set("page", pageNumber.toString());
    if (query) params.set("query", query);
    return `${pathname}?${params.toString()}`;
  };

  const navigate = (pageNumber) => {
    const newUrl = createPageUrl(pageNumber);
    replace(newUrl);
  };

  return (
    <div className="flex justify-between mx-4 w-full">
      {currentPage > 1 && (
        <button
          onClick={() => navigate(currentPage - 1)}
          className="bg-purple-700 text-purple-100 px-4 py-2 rounded-md hover:bg-purple-800 transition-all duration-300"
        >
          Back
        </button>
      )}
      {currentPage < pageCount && (
        <button
          onClick={() => navigate(currentPage + 1)}
          className="bg-purple-700 text-purple-100 px-4 py-2 rounded-md hover:bg-purple-800 transition-all duration-300 ml-auto mr-4"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
