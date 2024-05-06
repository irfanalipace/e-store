import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",

  initialState: [],

  reducers: {
    
    addTodo:  (state, action) => {

      const { id, text } = action.payload;

      state.push({ id, text, completed: false });

    },

    removeTodo: (state, action) => {

      return state.filter((todo) => todo.id !== action.payload);

    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
