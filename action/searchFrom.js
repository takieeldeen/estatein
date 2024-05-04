"use server";

import supabase from "@/api/supabase";

export async function searchProperty(_, formData) {
  try {
    const query = formData.get("property_name");
    let { data, error } = await supabase
      .from("listings")
      .select()
      .ilike("prop_title", `%${query}%`)
      .limit(5);
    if (error) throw new Error(error);
    console.log(data);
    return { error, data };
  } catch (err) {
    if (err) throw new Error(err.message);
  }
}
