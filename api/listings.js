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

export async function searchListings(query) {
  try {
    let { data, error } = await supabase
      .from("listings")
      .select()
      .ilike("prop_title", `%${query}%`)
      .limit(5);
    if (error) throw new Error(error);
    return { error, data };
  } catch (err) {
    if (err) throw new Error(err.message);
  }
}
