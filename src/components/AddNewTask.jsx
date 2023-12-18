export function AddNewTask() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-4xl font-medium">Do zrobienia</h1>
        <h2 className="text-3xl font-medium">2 zadania</h2>
      </div>
      <div>
        <button className="relative h-[60px] w-[60px] rounded-full bg-blue-500 text-center text-4xl font-bold text-white hover:bg-blue-700">
          <span className="absolute inset-0 bottom-[6px] flex items-center justify-center">
            +
          </span>
        </button>
      </div>
    </div>
  );
}
