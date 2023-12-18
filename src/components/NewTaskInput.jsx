import { useState } from "react";

export function NewTaskInput({ addTask, handleCloseNewTask }) {
  const [taskName, handleTaskName] = useState("");

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        className="w-full rounded-[3px] border border-gray-800 px-1"
        onChange={(e) => handleTaskName(e.target.value)}
      />
      <button
        className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={() => (addTask(taskName), handleCloseNewTask(true))}
      >
        Dodaj
      </button>
    </div>
  );
}
