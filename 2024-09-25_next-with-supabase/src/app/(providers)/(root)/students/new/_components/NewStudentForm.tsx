"use client";

import React from "react";
import supabase from "@/supabase/client";
import { Database } from "../../../../../../../database.types";
import studentsAPI from "@/api/students.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function NewStudentForm() {
  const queryClient = useQueryClient();

  const { mutate: addStudent } = useMutation<
    unknown,
    Error,
    Database["public"]["Tables"]["students"]["Insert"]
  >({
    mutationFn: (data) => studentsAPI.addStudent(data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["students"], exact: true }),
  });

  const handleSubmitAddStudent = async (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const age = +e.target.age.value;
    const schoolName = e.target.schoolName.value;
    const gender = e.target.gender.value;
    const isFemale = gender === "여자";

    const data: Database["public"]["Tables"]["students"]["Insert"] = {
      name,
      age,
      schoolName,
      isFemale,
    };

    addStudent(data);
  };

  return (
    <form onSubmit={handleSubmitAddStudent}>
      <input name="name" type="text" placeholder="이름" className="border" />
      <input name="age" type="number" placeholder="나이" className="border" />
      <input
        name="schoolName"
        type="text"
        placeholder="학교"
        className="border"
      />
      <input name="gender" type="text" placeholder="성별" className="border" />

      <button className="border border-black">학생 추가하기</button>
    </form>
  );
}

export default NewStudentForm;
