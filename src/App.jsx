import { useState } from "react";

import { TasksList } from "./components/TasksList";
import { AddNewTask } from "./components/AddNewTask";
import { NewTaskInput } from "./components/NewTaskInput";

function App() {
  const [openNewTask, handleOpenNewTask] = useState(true);
  const [tasksList, setTasksList] = useState([]);

  function addTask(task) {
    setTasksList((prevData) => [...prevData, task]);
  }

  function updateTask(taskId) {
    setTasksList((prevData) =>
      prevData.map((task) =>
        task.id === taskId ? { ...task, isFinished: true } : task,
      ),
    );
  }

  function deleteTask(taskId) {
    setTasksList((prevData) => prevData.filter((task) => task.id !== taskId));
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

        <TasksList
          tasksList={tasksList}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
