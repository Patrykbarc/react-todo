export function TasksList() {
  return (
    <div>
      <ul>
        <li className="flex gap-2 align-middle">
          <span className="w-[100%] text-xs">Zadanie 1</span>
          <button className="rounded-sm border border-main px-2 text-xs text-main">
            Zrobione
          </button>
          <button className="rounded-sm border border-main px-2 text-xs text-main">
            Usuń
          </button>
        </li>
      </ul>
    </div>
  );
}
