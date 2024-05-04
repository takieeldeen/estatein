import { searchListings } from "@/api/listings";
import supabase from "@/api/supabase";
import { useEffect, useState } from "react";

export function useAutoComplete(query) {
  //State that control the results for the auto complete
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);
  //State that control the loading state for the auto complete
  const [isLoading, setIsLoading] = useState(false);
  //State that control the error state for the auto complete
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchListings() {
      if (query === "") {
        setAutoCompleteResults([]);
        return;
      }
      try {
        setIsLoading(true);
        setError("");

        const { data: listings, error, ac } = await searchListings(query);
        if (error)
          throw new Error("Something went wrong with fetching properties");
        setAutoCompleteResults(listings);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    }
    fetchListings();
    // Cleanup function
    return async () => {
      const ac = new AbortController();
      ac.abort();
      const { data, error } = await supabase
        .from("listings")
        .select()
        .abortSignal(ac.signal);
    };
  }, [query]);
  return { autoCompleteResults, isLoading, error };
}
