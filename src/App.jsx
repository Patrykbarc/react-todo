import { useState } from "react";

import { TasksList } from "./components/TasksList";
import { AddNewTask } from "./components/AddNewTask";
import { NewTaskInput } from "./components/NewTaskInput";

function App() {
  const [addTask, handleAddTask] = useState(true);

  return (
    <div className="container w-[450px] rounded-lg bg-white p-5">
      <div>
        {addTask ? <AddNewTask /> : <NewTaskInput />}

        <TasksList />
      </div>
    </div>
  );
}

export default App;
