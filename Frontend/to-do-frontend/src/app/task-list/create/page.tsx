"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Create() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    console.log(e.target);
    await fetch("http://localhost:8080/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center bg-purple-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Add new task</h2>
          <Link
            href={"/task-list"}
            className="text-white hover:bg-purple-700 p-2 px-3 rounded-lg"
          >
            X
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              value={formState.title}
              name="title"
              onChange={(e) => setFormState({...formState, title: e.target.value})}
              placeholder="Type the title of the task"
              required
              className="w-full"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              value={formState.description}
              name="description"
              onChange={(e) => setFormState({...formState, description: e.target.value})}
              placeholder="Type the description of the task"
              rows={4}
              className="w-full"
            />
          </div>
          <div className="flex justify-end pt-4 gap-3">
            <Link href={"/task-list"} className="p-2">
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg flex gap-2 items-center "
            >
              <i className="bx bx-plus-circle text-lg"></i>
              Add new task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
