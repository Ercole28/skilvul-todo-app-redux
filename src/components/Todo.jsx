import PropTypes from 'prop-types';
import { useState } from 'react';
import { toggleTask, removeTask } from "../redux/slices/todoSlice"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import EditModal from './modals/editModal';

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
        <div className="flex gap-x-2 items-center">
          <button 
            onClick={() => toggleTodo(id)}
            className="flex justify-center items-center w-6 h-6 border border-slate-100/50 rounded-sm cursor-pointer"
          >
            {completed && (
              <FontAwesomeIcon icon={faCheck} className="text-lg text-green-400" />
            )}
          </button>
          <span className={`${completed ? "line-through" : ""} text-white cursor-default`}>{text}</span>
        </div>
        <div className="flex gap-x-2">
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
