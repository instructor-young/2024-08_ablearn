import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabaseUrl = "https://qdekudtokowkxicnrobx.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseKey) throw new Error("No supabaseKey provided");

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
