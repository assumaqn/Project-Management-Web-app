import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const inputEl = useRef();
  function handleChange(e) {
    setEnteredTask(e.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      inputEl.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
      <Modal ref={inputEl}>
        <h2 className="text-stone-700 font-bold p-8 ">Incorrect input</h2>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="text-stone-700 hover:text-stone-950 "
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
