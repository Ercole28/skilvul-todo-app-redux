import PropTypes from 'prop-types';
import { useState } from 'react';
import { toggleTask, removeTask } from "../../redux/slices/todoSlice"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import EditModal from '../modals/editModal';

export default function Todo(props) {
  const { id, completed, text } = props;
  const [editModal, setEditModal] = useState(false);

  const dispatch = useDispatch();

  const toggleTodo = (id) => {
    dispatch(toggleTask(id));
  };

  const removeTodo = (id) => {
    dispatch(removeTask(id));
  };

  const toggleModal = () => {
    setEditModal((prev) => !prev);
  };

  return (
    <>
      <div
        key={id}
        className="w-full flex items-center justify-between border border-slate-100/50 px-3 py-2 rounded-lg mb-2 hover:translate-x-2 duration-300 ease-out"
      >
        <div className="flex gap-x-2 cursor-default">
          <span>{completed ? "✅" : "⛔"}</span>
          <span className={`${completed ? "line-through" : ""} text-white`}>{text}</span>
        </div>
        <div className="flex gap-x-2">
          <button
            onClick={() => toggleTodo(id)}
            className="flex justify-center items-center bg-sky-500 w-10 h-8 rounded-md"
          >
            {!completed ? (
              <FontAwesomeIcon icon={faCheck} color={"white"} />
            ) : (
              <FontAwesomeIcon icon={faXmark} color={"white"} />
            )}
          </button>
          <button
            onClick={toggleModal}
            className="flex justify-center items-center bg-amber-400 w-10 h-8 rounded-md"
          >
            <FontAwesomeIcon icon={faEdit} color={"black"}/>
          </button>
          <button
            onClick={() => removeTodo(id)}
            className="flex justify-center items-center bg-red-500 w-10 h-8 rounded-md"
          >
            <FontAwesomeIcon icon={faTrash} color={"white"} />
          </button>
        </div>
      </div>

      {editModal && (
        <EditModal {...props} toggleModalFunc={toggleModal}/>
      )}
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.number,
  completed: PropTypes.bool,
  text: PropTypes.string
}
