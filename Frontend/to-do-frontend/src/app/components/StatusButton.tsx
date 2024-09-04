"use client";
import { useState } from "react";

const StatusButton = () => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };
  return (
    <button
      onClick={toggleCompleted}
      className={`w-full flex items-center justify-center gap-2 ${
        completed
          ? "text-green-600 hover:text-green-800"
          : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {completed ? (
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
