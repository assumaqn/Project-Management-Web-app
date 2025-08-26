import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enterdTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enterdDueDate = dueDate.current.value;
    onAdd({
      title: enterdTitle,
      description: enterdDescription,
      dueDate: enterdDueDate,
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 hover:bg-stone-950 px-6 py-2 text-stone-50 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input title={"Title"} ref={title} />
        <Input title={"Description"} textarea ref={description} />
        <Input title={"Due Date"} type={"Date"} ref={dueDate} />
      </div>
    </div>
  );
}
