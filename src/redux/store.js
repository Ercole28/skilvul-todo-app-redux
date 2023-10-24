import { configureStore } from "@reduxjs/toolkit";

// Penulisan lama
// import oldTodoSlice from "./reducers/oldTodoReducer"
// Penulisan baru
import todoSlice from "./slices/todoSlice";

const store = configureStore({
  reducer:{
    todo: todoSlice,
  }
})

export default store;