import supabase from "./supabase";

export async function getFeaturedListings() {
  try {
    let { data: featured, error } = await supabase.from("featured").select("*");
    return featured;
  } catch (err) {
    if (err)
      throw new Error(
        "Something went wrong while fetching the featured listings"
      );
  }
}

export async function searchListings(query, page = 1) {
  try {
    const resPerPage = 5;
    const pageCount = await getPagesCount(query);
    const startingIndex =
      (page - 1) * resPerPage < 0 ? 0 : (page - 1) * resPerPage;
    //48
    const lastIndex =
      startingIndex + resPerPage - 1 > pageCount * resPerPage - 1
        ? pageCount * resPerPage - 1
        : startingIndex + resPerPage - 1;
    let { data, error } = await supabase
      .from("listings")
      .select()
      .ilike("prop_title", `%${query}%`)
      .range(startingIndex, lastIndex);
    if (error) throw new Error(error);
    return { error, data };
  } catch (err) {
    if (err) throw new Error(err.message);
  }
}

export async function getPagesCount(query = "*") {
  try {
    const resPerPage = 5;
    const { count, error } = await supabase
      .from("listings")
      .select("*", { count: "exact", head: true })
      .ilike("prop_title", `%${query}%`);
    if (error) throw new Error(error);

    return Math.floor(count / resPerPage) + 1;
  } catch (error) {
    if (error) throw new Error(error.message);
  }
}
