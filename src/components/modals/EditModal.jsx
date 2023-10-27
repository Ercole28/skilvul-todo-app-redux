import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from "react";
import { updateTask } from "../../redux/slices/todoSlice"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function EditModal(props) {
  const { id, text, toggleModalFunc } = props;
  const [newData, setNewData] = useState({
    id: id,
    text: text,
  });
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const updateTodo = (e) => {
    e.preventDefault();
    
    dispatch(updateTask(newData));
    toggleModalFunc();
  };

  const handleEditForm = (e) => {
    setNewData({
      id: id,
      text: e.target.value
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []) 

  return (
    <div className="bg-black/70 fixed w-full h-screen top-0 left-0 px-4 flex justify-center items-center duration-300">
      <form className="relative w-full max-w-md bg-[#181818] p-6 sm:p-8 rounded-xl">
        <h1 className="text-xl font-bold text-white">Edit To Do</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Edit your todo"
          className="w-full text-black col-span-2 px-4 py-2.5 rounded-md focus:outline-none placeholder:text-slate-500 mb-3"
          value={newData.text}
          onChange={handleEditForm}
        />
        <button
          onClick={updateTodo}
          className="w-full font-bold bg-sky-500 px-10 py-3 rounded-md text-white"
        >
          Edit
        </button>

        <span
          onClick={toggleModalFunc}
          className="absolute top-4 right-4 text-white cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} color={"white"} className="text-xl" />
        </span>
      </form>
    </div>
  );
}

EditModal.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  toggleModalFunc: PropTypes.func
}
