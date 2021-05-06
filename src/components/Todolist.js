import React from 'react';
import Todo from './Todo'

function Todolist(props){

    return (
        <div className = "mb-3">
            {props.todos.map(todo => {
                return(
                    <Todo 
                    todo = {todo}
                    key = {todo.id}
                    todos = {props.todos}
                    setTodos = {props.setTodos}
                    />
                )
                console.log(todo);
            })}
        </div>
    );

}

export default Todolist;