import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export function TasksList({ tasksList, setTasksList }) {
  function handleOnDragEnd(result) {
    const items = Array.from(tasksList);
    const [reordededItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordededItem);

    setTasksList(items);
  }

  function updateTask(taskId) {
    const isChecked = event.target.checked;
    setTasksList((prevData) =>
      prevData.map((task) =>
        task.id === taskId ? { ...task, isFinished: isChecked } : task,
      ),
    );
  }

  function deleteTask(taskId) {
    setTasksList((prevData) => prevData.filter((task) => task.id !== taskId));
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasksList">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {tasksList.map(({ id, name, isFinished }, index) => (
                <Draggable key={id} draggableId={id.toString()} index={index}>
                  {(provided) => (
                    <li
                      className="border-b"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex justify-between p-3 align-middle">
                        <div className="flex w-max gap-2">
                          <input
                            type="checkbox"
                            onChange={() => updateTask(id)}
                            id={`task-${id}`}
                          />
                          <label
                            htmlFor={`task-${id}`}
                            className="w-max cursor-pointer"
                          >
                            {isFinished ? <s>{name}</s> : name}
                          </label>
                        </div>

                        <div className="flex gap-2">
                          {/* {!isFinished && (
                            <button
                              className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
                              onClick={() => updateTask(id)}
                            >
                              Zrobione
                            </button>
                          )} */}
                          <button
                            className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
                            onClick={() => deleteTask(id)}
                          >
                            Usuń
                          </button>
                        </div>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </form>
  );
}
