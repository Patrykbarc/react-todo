import Modal from "react-modal";
import { useState } from "react";

export function DeletedTasks({ deletedTasks }) {
  const customStyles = {
    content: {
      top: "25%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "500px",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <small className="flex justify-end">
        <button onClick={openModal}>Usunięte zadania</button>
      </small>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="mb-5 flex justify-between align-middle">
          <h2 className="text-3xl font-medium">Usunięte zadania</h2>
          <button onClick={closeModal}>x</button>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <ul>
            {deletedTasks.map(({ id, name }) => (
              <div key={`task-${id}`} className="flex justify-between">
                <li className="border-b py-2 last-of-type:border-none">
                  {name}
                </li>
                <button className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                  Przywróć
                </button>
              </div>
            ))}
          </ul>
        </form>
      </Modal>
    </div>
  );
}
