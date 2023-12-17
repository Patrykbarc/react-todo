import { TasksList } from "./TasksList";
export function Container() {
  return (
    <div className="container w-72 justify-between rounded-md border bg-white p-4 shadow-sm">
      <div>
        <h1 className="font-medium">Do zrobienia</h1>
        <h2 className="font-medium">${} zadania</h2>
      </div>

      <TasksList />
    </div>
  );
}
