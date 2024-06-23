"use client";
import React from "react";
import { Test } from "@wallet-app/types/test";
import { useCountState, useCountValue } from "@wallet-app/store/useCount";
import { SetterOrUpdater } from "recoil";

const TestUI = () => {
  const {
    value,
    setValue,
  }: { value: number; setValue: SetterOrUpdater<number> } = useCountState();
  // const count = useCountValue();
  const abc: Test = {
    name: "alfaarghya",
    age: 21,
  };
  return (
    <div>
      <div>CountUi {value}</div>
      <button
        className="border bg-amber-300 p-2"
        onClick={() => setValue(value + 11)}
      >
        +11
      </button>
      <div>{abc.name}</div>
    </div>
  );
};

export default TestUI;
