export function AddNewTask({ tasksList, handleOpenNewTask }) {
  const tasksLength = tasksList.length;
  let tasksLengthInfo;

  switch (tasksLength) {
    case 0:
      tasksLengthInfo = "Brak zadań";
      break;
    case 1:
      tasksLengthInfo = `${tasksLength} zadanie`;
      break;
    case 2:
    case 3:
    case 4:
      tasksLengthInfo = `${tasksLength} zadania`;
      break;
    default:
      tasksLengthInfo = `${tasksLength} zadań`;
  }

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="mb-1 text-3xl font-medium">Do zrobienia</h1>
        <h2 className="text-2xl font-medium">{tasksLengthInfo}</h2>
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
