export function TasksList({ tasksList }) {
  return (
    <ul>
      {tasksList.map((task) => (
        <li key={task}>
          <hr className="mt-3" />
          <div className="mt-6 flex justify-between align-middle">
            <p className="w-max">{task}</p>
            <div className="flex gap-2">
              <button className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                Zrobione
              </button>
              <button className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                Usuń
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
