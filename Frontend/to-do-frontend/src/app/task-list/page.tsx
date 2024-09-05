'use client';
import TaskList from "@/app/components/TaskList";
import Task from "@/app/models/Task";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8080/api/v1/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:8080/api/v1/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
          My Tasks
        </h1>
        <div className="flex justify-between gap-4 mb-8">
          <Link href={"/task-list/create"} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
            <i className="bx bx-plus-circle"></i>
            Add new task
          </Link>
          <button className="flex items-center gap-2 font-bold px-4 py-2 rounded-lg bg-white">
            <i className="bx bx-filter-alt"></i>
            Filter
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}
