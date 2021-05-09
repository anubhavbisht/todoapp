import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form.js";
import ToDoList from "./components/ToDoList.js";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [newtodos, setnewtodos] = useState([]);

  useEffect(() => {
    filterhandler();
  }, [todos, status]);
  const filterhandler = () => {
    switch (status) {
      case "completed":
        setnewtodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setnewtodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setnewtodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>Anubhav To Do List </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList todos={todos} setTodos={setTodos} newtodos={newtodos} />
    </div>
  );
}

export default App;
