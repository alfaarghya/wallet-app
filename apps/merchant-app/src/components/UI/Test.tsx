"use client";
import React from "react";
import { Test } from "@wallet-app/types/test";
import { useCountState, useCountValue } from "@wallet-app/store/useCount";
import { SetterOrUpdater } from "recoil";

const TestUI = () => {
  const abc: Test = {
    name: "alfaarghya_Merchant",
    age: 31,
  };
  const {
    value,
    setValue,
  }: { value: number; setValue: SetterOrUpdater<number> } = useCountState();
  return (
    <div>
      <div>CountUi {value}</div>
      <button
        className="border bg-amber-300 p-2"
        onClick={() => setValue(value + 1)}
      >
        +1
      </button>
      <div>{abc.name}</div>
    </div>
  );
};

export default TestUI;
