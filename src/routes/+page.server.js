import { supabase } from "$lib/supabase";

export async function load() {
    console.log('loading is called');
    const { data } = await supabase.from("products").select('');

    return {
      products: data ?? []
    };
  }