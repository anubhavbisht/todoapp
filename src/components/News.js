import React from "react";

const News = ({ todotext, todo, todos, setTodos }) => {
  const deletehandler = () => {
    setTodos(todos.filter((e1) => e1.id !== todo.id));
  };
  const completed = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          todo.completed = !todo.completed;
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todotext}
      </li>
      <button onClick={completed} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deletehandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default News;
