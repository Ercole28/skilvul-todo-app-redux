import PropTypes from 'prop-types';
import { toggleTask, removeTask } from "../../redux/slices/todoSlice"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Todo(props) {
  const { id, completed, text } = props;

  const dispatch = useDispatch()

  const toggleTodo = (id) => {
    dispatch(toggleTask(id));
  }

  const removeTodo = (id) => {
    dispatch(removeTask(id));
  }
  return (
    <div
      key={id}
      className="w-full flex items-center justify-between border border-slate-100/50 px-3 py-2 rounded-lg mb-2 hover:translate-x-2 duration-300 ease-out"
    >
      <div className="flex gap-x-2 cursor-default">
        <span>{completed ? "✅" : "⛔"}</span>
        <span className="text-white">{text}</span>
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={() => toggleTodo(id)}
          className="flex justify-center items-center bg-slate-500 w-10 h-8 rounded-md"
        >
          {!completed ? (
            <FontAwesomeIcon icon={faCheck} color={"white"} />
          ) : (
            <FontAwesomeIcon icon={faXmark} color={"white"} />
          )}
        </button>
        <button
          onClick={() => removeTodo(id)}
          className="flex justify-center items-center bg-red-500 w-10 h-8 rounded-md"
        >
          <FontAwesomeIcon icon={faTrash} color={"white"} />
        </button>
      </div>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool,
  text: PropTypes.string
}
