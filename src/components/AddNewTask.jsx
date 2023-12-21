export function AddNewTask({ tasksList, handleOpenNewTask }) {
  let tasksLength;

  if (tasksList.length === 1) {
    tasksLength = `${tasksList.length} zadanie`;
  } else if (tasksList.length > 1 && tasksList.length < 5) {
    tasksLength = `${tasksList.length} zadania`;
  } else {
    tasksLength = `Brak zadań`;
  }

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl font-medium">Do zrobienia</h1>
        <h2 className="text-2xl font-medium">{tasksLength}</h2>
      </div>
      <div>
        <button
          onClick={() => handleOpenNewTask(false)}
          className="relative h-[60px] w-[60px] rounded-full bg-blue-500 text-center text-4xl font-bold text-white hover:bg-blue-700"
        >
          <span className="absolute inset-0 bottom-[6px] flex items-center justify-center">
            +
          </span>
        </button>
      </div>
    </div>
  );
}
