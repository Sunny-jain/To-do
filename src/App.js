import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(() => {
    saveLocalStorage();

  })
  const saveLocalStorage = () =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todosLocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
      setTodos(todosLocal);
    }
  }

  return (    
    <div className = "todo-app">
      <h1>To-Do List</h1>
      <Form 
        placeholder = "Enter the tasks"
        setInput = {setInput}
        input = {input}
        todos = {todos}
        setTodos = {setTodos}
      />
      <Todolist 
        todos = {todos}
        setTodos = {setTodos}
      />
    </div>
  );
}

export default App;
