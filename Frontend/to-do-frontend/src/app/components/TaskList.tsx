"use client";
import StatusButton from "@/app/components/StatusButton";
import Task from "@/app/models/Task";
import Link from "next/link";

export default function TaskList({ tasks, deleteTask }: { tasks: Task[], deleteTask: (id: number) => void }) {
  
  return (
    <table className="w-full">
      <thead className="bg-purple-600 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Title</th>
          <th className="py-3 px-4 text-left">Description</th>
          <th className="py-3 px-4 text-left">Created at</th>
          <th className="py-3 px-4 text-left">Updated at</th>
          <th className="py-3 px-4 text-left">Actions</th>
          <th className="py-3 px-4 text-left">Completed</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <tr
              className="border-b border-gray-200 hover:bg-gray-50"
              key={task.id}
            >
              <td className="py-3 px-4">{task.title}</td>
              <td className="py-3 px-4">{task.description}</td>
              <td className="py-3 px-4">{task.createdAt}</td>
              <td className="py-3 px-4">{task.updatedAt}</td>
              <td className="py-3 px-4">
                <div className="flex justify-evenly gap-2">
                  <Link href={`/task-list/edit/${task.id}`} className="text-blue-600 hover:text-blue-800">
                    <i className="bx bx-edit text-2xl"></i>
                  </Link>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <i className="bx bxs-trash text-2xl"></i>
                  </button>
                </div>
              </td>
              <td className="py-3 px-4">
                <StatusButton completed={task.completed} />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="text-center py-4">
              No tasks available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
