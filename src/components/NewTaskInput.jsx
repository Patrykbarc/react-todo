export function NewTaskInput() {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        className="w-full rounded-[3px] border border-gray-800"
      />
      <button className="h-fit rounded border border-blue-500 bg-transparent px-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
        Dodaj
      </button>
    </div>
  );
}
