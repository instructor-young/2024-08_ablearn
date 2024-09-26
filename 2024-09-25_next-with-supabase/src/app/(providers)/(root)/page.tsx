"use client";

import { useEffect, useState } from "react";
import { Database } from "../../../../database.types";
import studentsAPI from "@/api/students.api";
import { useQuery } from "@tanstack/react-query";
import NewStudentForm from "./students/new/_components/NewStudentForm";

function HomePage() {
  const { data: students, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: studentsAPI.getStudents,
  });

  return (
    <div>
      <NewStudentForm />
      <hr />
      <h1>학생들 목록</h1>

      {isLoading && <p>학생들 목록을 불러오는 중...</p>}

      <ul>
        {students?.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
