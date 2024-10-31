import { describe } from "node:test";
import React from "react";

const NumberSpinner = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (value: number) => void;
}) => {
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count > 1 ? --count : count);
  };

  return (
    <div className="w-full h-full flex justify-between items-center border border-gray-300 rounded-lg">
      <button
        onClick={() => decrease()}
        className={`p-3 hover:text-gray-400 ${
          count <= 1 ? "text-gray-400" : ""
        }`}
      >
        <i className="fa-solid fa-minus"></i>
      </button>

      <div> {count} </div>

      <button onClick={() => increase()} className="p-3 hover:text-gray-400">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default NumberSpinner;
