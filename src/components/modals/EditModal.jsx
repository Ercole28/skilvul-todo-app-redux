import PropTypes from 'prop-types';
import { useState } from "react";
import { updateTask } from "../../redux/slices/todoSlice"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function EditModal(props) {
  const { id, text, toggleModalFunc } = props;

  const dispatch = useDispatch();

  const updateTodo = (e) => {
    e.preventDefault();    
    dispatch(updateTask(newData));
    toggleModalFunc();
  };

  const [newData, setNewData] = useState({
    id: id,
    text: text,
  });

  const handleEditForm = (e) => {
    setNewData({
      id: id,
      text: e.target.value
    });
  };

  return (
    <div className="bg-black/70 fixed w-full h-screen top-0 left-0 flex justify-center items-center duration-3">
      <form className="relative w-full max-w-md bg-[#181818] p-8 rounded-xl">
        <h1 className="text-xl font-bold text-white">Edit To Do</h1>
        <input
          type="text"
          className="w-full text-black col-span-2 px-4 py-2.5 rounded-md focus:outline-none placeholder:text-slate-500 mb-3"
          value={newData.text}
          onChange={handleEditForm}
        />
        <button
          onClick={updateTodo}
          type="button"
          className="w-full font-bold bg-slate-600 px-10 py-3 rounded-md text-white"
        >
          Edit
        </button>

        <button
          onClick={toggleModalFunc}
          type="button"
          className="absolute top-4 right-4 text-white"
        >
          <FontAwesomeIcon icon={faXmark} color={"white"} className="text-xl" />
        </button>
      </form>
    </div>
  );
}

EditModal.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  toggleModalFunc: PropTypes.func
}
