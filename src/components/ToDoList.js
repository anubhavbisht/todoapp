import React from "react";
import News from "./News.js";
const ToDoList = ({ todos, setTodos, newtodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {newtodos.map((todo) => (
        <News
          todotext={todo.text}
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
};
export default ToDoList;
