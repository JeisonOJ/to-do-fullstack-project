"use client";
import { useState } from "react";

const StatusButton = ({completed}:{completed:boolean}) => {
  const [isCompleted, setCompleted] = useState(completed);

  const toggleCompleted = () => {
    setCompleted(!isCompleted);
  };
  return (
    <button
      onClick={toggleCompleted}
      className={`w-full flex items-center justify-center gap-2 ${
        isCompleted
          ? "text-green-600 hover:text-green-800"
          : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {isCompleted ? (
        <>
          <i className="bx bxs-check-circle"></i>
          Completed
        </>
      ) : (
        <>
          <i className="bx bx-circle"></i>
          Pending
        </>
      )}
    </button>
  );
};

export default StatusButton;
