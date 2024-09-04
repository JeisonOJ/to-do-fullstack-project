import TaskList from "@/app/components/TaskList";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "Task list",
  description: "List Task Page",
  keywords: ["Task list", "task"],
}

export default async function Tasks() {
  const res = await fetch("http://localhost:8080/api/v1/tasks");
  const data = await res.json();
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
          My Tasks
        </h1>
        <div className="flex justify-between gap-4 mb-8">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
            <i className="bx bx-plus-circle"></i>
            Add new task
          </button>
          <button className="flex items-center gap-2 font-bold px-4 py-2 rounded-lg bg-white">
            <i className="bx bx-filter-alt"></i>
            Filter
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <TaskList tasks={data} />
        </div>
      </div>
    </div>
  );
}
