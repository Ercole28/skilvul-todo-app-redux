import { useState } from "react";
import { useSelector } from "react-redux";
import TodosList from "./lists/TodosList";
import Alert from "./alerts/Alert";
import InputTodo from "./InputTodo";

export default function TodoApp() {
  const [filter, setFilter] = useState("all");
  const todos = useSelector((state) => state.todo.tasks);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return todo;
    } else if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    }
    return todo;
  });

  return (
    <div className="w-full">
      <h1 className="font-bold text-sm text-white mb-1 -ml-1">⭐ New Redux</h1>
      {/* Input Todo */}
      <InputTodo/>

      {/* Filter */}
      <div className="flex gap-x-4 mb-5">
        <button
          onClick={() => handleFilterChange('all')}
          className={`${
            filter === "all"
              ? "bg-sky-500 text-white"
              : "bg-slate-500 text-white"
          } px-3 py-1 rounded-xl duration-200`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("active")}
          className={`${
            filter === "active"
              ? "bg-sky-500 text-white"
              : "bg-slate-500 text-white"
          } px-3 py-1 rounded-xl duration-200`}
        >
          Active
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={`${
            filter === "completed"
              ? "bg-sky-500 text-white"
              : "bg-slate-500 text-white"
          } px-3 py-1 rounded-xl duration-200`}
        >
          Completed
        </button>
      </div>

      {/* TodoList */}
      {todos.length !== 0 ? (
        <TodosList todosData={filteredTodos} />
      ) : (
        <Alert message={"Make your first to do 🙌"} />
      )}
    </div>
  );
}
