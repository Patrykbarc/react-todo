import { useState } from "react";

export function NewTaskInput({ addTask, handleCloseNewTask }) {
  const [taskName, setTaskName] = useState("");

  function handleTaskName(e) {
    setTaskName(e.target.value);
  }

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        className="w-full rounded-[3px] border border-gray-800 px-1"
        placeholder="Nazwa zadania"
        value={taskName}
        onChange={handleTaskName}
      />
      <button
        className="h-fit cursor-pointer rounded border border-gray-400 bg-transparent px-2 font-semibold text-gray-400 hover:border-transparent hover:bg-gray-400 hover:text-white "
        onClick={() => handleCloseNewTask(true)}
      >
        Anuluj
      </button>

      <button
        className="h-fit cursor-pointer rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:border-slate-400 disabled:bg-slate-400 disabled:text-slate-200"
        disabled={taskName.trim().length === 0}
        onClick={() =>
          taskName !== "" &&
          (addTask({ name: taskName, id: Date.now(), isFinished: false }),
          handleCloseNewTask(true))
        }
      >
        Dodaj
      </button>
    </div>
  );
}
