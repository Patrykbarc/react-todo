function Modal() {
  return (
    <div className="absolute left-0 right-0 m-auto w-96 bg-slate-500">
      <ul>
        <li>zadanie 1</li>
        <li>zadanie 2</li>
        <li>zadanie 3</li>
        <li>zadanie 4</li>
        <li>zadanie 5</li>
      </ul>
    </div>
  );
}

export function DeletedTasks() {
  return (
    <>
      <small className="text-end">
        <button>Usunięte zadania</button>
      </small>
      <Modal />
    </>
  );
}
