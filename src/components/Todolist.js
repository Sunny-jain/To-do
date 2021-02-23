import React from 'react';
import Todo from './Todo'

function Todolist(props){

    return (
        <div>
            <ul className = "todo-list">
                {
                    props.todos.map(todo => (
                        <Todo 
                            todo = {todo}
                            key = {todo.id}
                            todos = {props.todos}
                            setTodos = {props.setTodos}
                        />
                    ))
                }
            </ul>
        </div>
    );

}

export default Todolist;