import { useState } from "react";

import { TasksList } from "./components/TasksList";
import { AddNewTask } from "./components/AddNewTask";
import { NewTaskInput } from "./components/NewTaskInput";
import { DeletedTasks } from "./components/DeletedTasks";

const initialTaskList = [
  { name: "Zrobić pranie", id: 1, isFinished: false },
  { name: "Zapłacić rachunki", id: 2, isFinished: false },
  { name: "Zjeść obiad", id: 3, isFinished: false },
];

const initialDeletedTasks = [
  { name: "Zrobić pranie", id: 7, isFinished: true },
  { name: "Zapłacić rachunki", id: 8, isFinished: true },
  { name: "Zapłacić rachunki za internet", id: 9, isFinished: true },
];

function App() {
  const [openNewTask, handleOpenNewTask] = useState(true);
  const [tasksList, setTasksList] = useState(initialTaskList);
  const [taskName, setTaskName] = useState("");
  const [deletedTasks, setDeletedTasks] = useState(initialDeletedTasks);

  console.log(deletedTasks);

  function addTask(task) {
    setTasksList((prevData) => [...prevData, task]);
  }

  function deleteTask(taskId) {
    setTasksList((prevData) => prevData.filter((task) => task.id !== taskId));
  }

  function restoreDeletedTasks(item) {
    setDeletedTasks((prevState) => [...prevState, item]);
  }
  function updateDeletedTasksArr(taskId) {
    setDeletedTasks((prevData) =>
      prevData.filter((task) => task.id !== taskId),
    );
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
          addTask={addTask}
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
          setDeletedTasks={setDeletedTasks}
          restoreDeletedTaks={restoreDeletedTasks}
        />
      )}
      {deletedTasks.length !== 0 && (
        <DeletedTasks
          deletedTasks={deletedTasks}
          restoreTask={addTask}
          updateDeletedTasksArr={updateDeletedTasksArr}
        />
      )}
    </div>
  );
}

export default App;
