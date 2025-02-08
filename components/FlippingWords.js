import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlippingWords() {
  const words = ["Programming", "Maths", "creativity"];

  return (
    (<div className="h-[30rem] flex justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-white bg-non">
        Using
        <FlipWords words={words} /> <br />
        to solve hard problems
      </div>
    </div>)
  );
}
