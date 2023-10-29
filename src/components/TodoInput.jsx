import { useState } from "react";
import { addTask } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (todo.trim() !== "") {
      dispatch(addTask(todo));
      setTodo("");
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <form className="w-full flex flex-col sm:flex-row gap-x-3 gap-y-2 mb-4">
        <input
          type="text"
          placeholder="What to do?"
          value={todo}
          onChange={handleChange}
          className={`w-full text-black col-span-2 px-4 py-2.5 rounded-md focus:outline-none placeholder:text-slate-500 ${alert && 'ring-2 ring-red-500'}`}
        />
        <button
          onClick={addTodo}
          className="block w-full sm:max-w-[150px] font-bold bg-sky-500 px-3 py-2 rounded-md text-white"
        >
          Add
        </button>
      </form>
      {alert && (
        <p className="text-center text-red-500 mb-3">
          Fill out the input field first! ✍️
        </p>
      )}
    </>
  );
}
