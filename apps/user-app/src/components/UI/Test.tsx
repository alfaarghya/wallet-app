import React from "react";
import { Test } from "@wallet-app/types/test";

const TestUI = () => {
  const abc: Test = {
    name: "alfaarghya",
    age: 21,
  };
  return (
    <div>
      Test
      <div>{abc.name}</div>
    </div>
  );
};

export default TestUI;
