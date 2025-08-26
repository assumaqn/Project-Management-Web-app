import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onClose }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enterdTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enterdDueDate = dueDate.current.value;

    if (
      enterdTitle.trim() === "" ||
      enterdDescription.trim() === "" ||
      enterdDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enterdTitle,
      description: enterdDescription,
      dueDate: enterdDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onClose}
            >
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
    </>
  );
}
