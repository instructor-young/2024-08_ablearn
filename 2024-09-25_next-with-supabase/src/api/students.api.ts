import supabase from "@/supabase/client";
import { Database } from "../../database.types";

async function getStudents() {
  const response = await supabase.from("students").select("*");
  const students = response.data;

  return students;
}

async function addStudent(
  data: Database["public"]["Tables"]["students"]["Insert"]
) {
  const response = await supabase.from("students").insert(data);
  const result = response.data;
  console.log("result", result);
}

const studentsAPI = {
  getStudents,
  addStudent,
};

export default studentsAPI;
