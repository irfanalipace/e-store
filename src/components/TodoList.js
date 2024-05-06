// TodoList.js

import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  toggleTodo,
  removeTodo,
} from "../features/products/todoSlice";

const TodoList = () => {

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [text, setText] = useState("");



const handleAddTodo = () => {

  if(text.trim() !== "") {

    dispatch(addTodo({id: new Date(), text}))

   }
  setText(" ");
}

const handleRemoveTodo = (id) => {
  dispatch(removeTodo(id));
};

  return (
    <div>
      <input
        type="text"
        value={text}
        
       onChange={(e)=>setText(e.target.value)}

        placeholder="Enter todo..."
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li
             key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          
          >
            {todo.text}{" "}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TodoList;
