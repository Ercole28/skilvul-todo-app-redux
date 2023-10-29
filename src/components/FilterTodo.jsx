import { useSelector, useDispatch } from "react-redux";
import { setTaskFilter } from "../redux/slices/todoSlice";

export default function FilterTodo() {
  const filter = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch()

  return (
    <div className="flex gap-x-3 sm:gap-x-4 mb-5">
      <button
        onClick={() => dispatch(setTaskFilter("all"))}
        className={`${
          filter === "all" ? "bg-sky-500 text-white" : "bg-slate-500 text-white"
        } text-sm sm:text-base px-3 py-1 rounded-md sm:rounded-lg duration-200`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setTaskFilter("active"))}
        className={`${
          filter === "active"
            ? "bg-sky-500 text-white"
            : "bg-slate-500 text-white"
        } text-sm sm:text-base px-3 py-1 rounded-md sm:rounded-lg duration-200`}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setTaskFilter("completed"))}
        className={`${
          filter === "completed"
            ? "bg-sky-500 text-white"
            : "bg-slate-500 text-white"
        } text-sm sm:text-base px-3 py-1 rounded-md sm:rounded-lg duration-200`}
      >
        Completed
      </button>
    </div>
  );
}
