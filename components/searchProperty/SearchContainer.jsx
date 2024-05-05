import SearchItem, { SearchItemSkeleton } from "./SearchItem";
import { searchListings } from "@/api/listings";

async function SearchContainer({ searchParams }) {
  const query = searchParams?.query || "";
  const page = +searchParams?.page || 1;

  const { data: listings, error } = await searchListings(query, page);
  return (
    <ul className="flex flex-col gap-4 mb-24 relative ">
      {/* Search Item */}
      {listings?.map((listing, i) => (
        <SearchItem listing={listing} key={i} />
      ))}
    </ul>
  );
}

export function SearchContainerSkeleton() {
  return (
    <ul className="flex flex-col gap-4 mb-24 relative ">
      <SearchItemSkeleton />
      <SearchItemSkeleton />
      <SearchItemSkeleton />
    </ul>
  );
}

export default SearchContainer;
