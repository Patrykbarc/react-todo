import { useState } from "react";

import { TasksList } from "./components/TasksList";
import { AddNewTask } from "./components/AddNewTask";
import { NewTaskInput } from "./components/NewTaskInput";

function App() {
  const [openNewTask, handleOpenNewTask] = useState(true);
  const [tasksList, setTasksList] = useState([]);

  console.log(tasksList);

  function addTask(task) {
    setTasksList((prevData) => [...prevData, task]);
  }

  return (
    <div className="container w-[450px] rounded-lg bg-white p-5">
      <div>
        {openNewTask ? (
          <AddNewTask
            tasksList={tasksList}
            handleOpenNewTask={handleOpenNewTask}
          />
        ) : (
          <NewTaskInput
            addTask={addTask}
            handleCloseNewTask={handleOpenNewTask}
          />
        )}

        <TasksList tasksList={tasksList} />
      </div>
    </div>
  );
}

export default App;
