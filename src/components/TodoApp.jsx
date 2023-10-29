import { useSelector } from "react-redux";
import TodosList from "./lists/TodosList";
import Alert from "./alerts/Alert";
import InputTodo from "./InputTodo";
import FilterTodo from "./FilterTodo";

export default function TodoApp() {
  const todos = useSelector((state) => state.todo.tasks);
  const filter = useSelector((state) => state.todo.filter);

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
      <InputTodo/>
      <FilterTodo/>
      {todos.length !== 0 ? (
        <TodosList todosData={filteredTodos} />
      ) : (
        <Alert message={"Make your first to do 🙌"} />
      )}
    </div>
  );
}
