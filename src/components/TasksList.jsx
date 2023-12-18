export function TasksList({ tasksList, updateTask, deleteTask }) {
  return (
    <ul>
      {tasksList.map((task) => (
        <li key={task.id}>
          <hr className="mt-3" />
          <div className="mt-6 flex justify-between align-middle">
            <p className="w-max">
              {task.isFinished ? <s>{task.name}</s> : task.name}
            </p>
            <div className="flex gap-2">
              {!task.isFinished && (
                <button
                  className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
                  onClick={() => updateTask(task.id)}
                >
                  Zrobione
                </button>
              )}
              <button
                className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
                onClick={() => deleteTask(task.id)}
              >
                Usuń
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
