import { useState } from "react";

import { TasksList } from "./components/TasksList";
import { AddNewTask } from "./components/AddNewTask";
import { NewTaskInput } from "./components/NewTaskInput";
import { DeletedTasks } from "./components/DeletedTasks";

function App() {
  const [openNewTask, handleOpenNewTask] = useState(true);
  const [tasksList, setTasksList] = useState([
    { name: "Zrobić pranie", id: 1, isFinished: false },
    { name: "Zapłacić rachunki", id: 2, isFinished: false },
    { name: "Zjeść obiad", id: 3, isFinished: false },
  ]);
  const [taskName, setTaskName] = useState("");

  function deleteTask(taskId) {
    setTasksList((prevData) => prevData.filter((task) => task.id !== taskId));
  }

  return (
    <div className="container flex w-[450px] flex-col gap-4 rounded-lg bg-white p-5">
      {openNewTask ? (
        <AddNewTask
          tasksList={tasksList}
          handleOpenNewTask={handleOpenNewTask}
        />
      ) : (
        <NewTaskInput
          setTasksList={setTasksList}
          handleCloseNewTask={handleOpenNewTask}
          taskName={taskName}
          setTaskName={setTaskName}
        />
      )}

      {tasksList.length !== 0 && (
        <TasksList
          tasksList={tasksList}
          setTasksList={setTasksList}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}

export default App;
