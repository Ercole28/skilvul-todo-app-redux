import { useState } from "react"
import { addTask } from "../redux/slices/todoSlice"
import { useSelector, useDispatch } from "react-redux"
import TodosList from "./lists/TodosList"
import Alert from "./alerts/Alert"

export default function NewRedux(){
  const [todo, setTodo] = useState('')
  const [filter, setFilter] = useState("all"); 
  const [alert, setAlert] = useState(false)
  
  const todos = useSelector((state) => state.todo.tasks)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()

    if (todo.trim() !== "") {
      dispatch(addTask(todo));
      setTodo('');
      setAlert(false);
    } else {
      setAlert(true);
    }
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return todo;
    } else if (filter === "true") {
      return todo.completed;
    } else if (filter === "false") {
      return !todo.completed;
    }
    return todo;
  });

  return(
    <div className="w-full">
      <h1 className="font-bold text-xl text-white mb-1 -ml-1">⭐ New Redux</h1>
      <form className="w-full grid grid-cols-4 gap-x-3 mb-3">
        <input
          type="text" 
          placeholder="Input your to do" 
          value={todo}
          onChange={handleChange}
          className="w-full text-black col-span-2 px-4 py-2.5 rounded-md focus:outline-none placeholder:text-slate-500"
        />
        <select 
          value={filter}
          onChange={handleFilterChange}
          className="w-full text-slate-500 px-4 py-2.5 rounded-md focus:outline-none appearance-none"
        >
          <option value="all">All</option>
          <option value="true">Done</option>
          <option value="false">Not Done</option>
        </select>
        <button onClick={addTodo} className="font-bold bg-slate-600 px-10 py-2 rounded-md text-white">Add</button>
      </form>

      {alert && (
        <p className="text-center text-red-500 mb-3">
          Fill out the input field first! ✍️
        </p>
      )}

      {todos.length !== 0 ? (
        <TodosList todosData={filteredTodos}/>
      ) : (
        <Alert message={'Make your first to do 🙌'}/>
      )}
    </div>
  )
}