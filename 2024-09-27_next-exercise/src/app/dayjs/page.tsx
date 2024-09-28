import dayjs from "dayjs";
import React from "react";

function DayjsPage() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = date.getSeconds();
  const result = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  const result2 = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const result3 = dayjs().subtract(1, "year").format("YYYY-MM-DD HH:mm:ss");

  return (
    <div>
      <section>
        <h2>자바스크립트 기본 방식</h2>
        <strong>{result}</strong>
      </section>
      <hr />
      <section>
        <h2>Dayjs 방식</h2>
        <strong>{result2}</strong>
        <br />
        <strong>{result3}</strong>
      </section>
    </div>
  );
}

export default DayjsPage;
