import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  todoS: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: nanoid(), text: action.payload };
      state.todoS.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todoS = state.todoS.filter((todo) => todo.id != action.payload);
    },
    updateTodo: () => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
