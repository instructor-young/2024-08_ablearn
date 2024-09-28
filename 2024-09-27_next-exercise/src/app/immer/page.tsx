"use client";

import { produce } from "immer";
import React from "react";

const original = [1, 2, 3, { name: "Young", body: { height: 10, weight: 1 } }];

function ImmerPage() {
  const newOne = produce(original, (draft) => {
    draft[3].body.height = 20;
  });

  console.log(original);
  console.log(newOne);

  return <div>page</div>;
}

export default ImmerPage;
