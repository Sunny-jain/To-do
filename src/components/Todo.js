import React from 'react';

function Todo(props){

    const ondelete = (e) => {
        props.setTodos(props.todos.filter((el) =>{
            return el.id !== props.todo.id;
        }))
    }

    const oncheck = (e) => {
        props.setTodos(props.todos.map(el =>{
            if(el.id === props.todo.id){
                return {
                    ...el, complete : !el.complete
                }
            }
            return el
        }))
    }
     
    return (
        <div className = "todo-row">
            <div className = {`todo-item ${props.todo.complete ? "complete" : ""}`}>{props.todo.text}</div>
            <div className = "icons">
            <button onClick = {oncheck}><i className = "fa fa-check"></i></button>
            <button onClick = {ondelete}><i className = "fa fa-trash"></i></button>
            </div>
        </div>
    );
}

export default Todo;