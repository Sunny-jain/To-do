import React, { useEffect, useState } from 'react';
import './App.css';
import Tasks from './components/Tasks'
import Todolist from './components/Todolist';
import Day from "./components/DayComponenet";
import Switch from "./components/Switch";

function App() {
  const [todos, setTodos] = new useState([]);
  const [dark, setDark] = useState(false);

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
    <div id = "body" className = {dark ? 'dark':'light'} >
      <div className = "main">
        <span className = "text-toggle">{dark ? "dark" : "light"} </span>
        <Switch
          dark = {dark}
          setDark = {setDark}
        />
      </div>
      <div className = "row">
        <div className = "col-1 col-md-3"></div>
        <div className = {`card mx-auto col-10 col-md-6 ${dark ? 'dark-card' : 'light-card'}`}>
          <div className = "card-body">
            <div className = "card-title row">
                <div className = "col-9 col-md-10">
                  <Day/>
                </div>
                <div className = "col-3 col-md-2">
                  <Tasks
                    todos = {todos}
                    setTodos = {setTodos}
                  />
                </div>
            </div>
            <hr></hr>
          </div>
          <Todolist 
            todos = {todos}
            setTodos = {setTodos}
          />
          <hr></hr>
        </div>
        <div className = "col-1 col-md-3"></div>
      </div>
    </div>
  );
}

export default App;
