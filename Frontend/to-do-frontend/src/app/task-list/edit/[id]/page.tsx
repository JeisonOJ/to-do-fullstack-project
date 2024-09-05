"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function Edit() {
  const { id } = useParams();
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:8080/api/v1/tasks/${id}`);
      // if(!response.ok) notFound();

      const data = await response.json();
      setFormState({
        title: data.title,
        description: data.description,
      });
    };

    if (id) {
      fetchTask();
    }
  }, [id]);

  const updateTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    console.log(e.target);
    const response = await fetch(`http://localhost:8080/api/v1/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    if (response.ok) router.push("/task-list");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center bg-purple-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Edit task</h2>
          <Link
            href={"/task-list"}
            className="text-white hover:bg-purple-700 p-2 px-3 rounded-lg"
          >
            X
          </Link>
        </div>
        <form onSubmit={updateTask} className="p-6 space-y-4">
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
              onChange={(e) =>
                setFormState({ ...formState, title: e.target.value })
              }
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
              onChange={(e) =>
                setFormState({ ...formState, description: e.target.value })
              }
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
              <i className="bx bx-edit text-lg"></i>
              Edit task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
