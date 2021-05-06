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
        <div className = "row ml-2 mb-1">
            <div className = "col-2 left" onClick = {oncheck}><span className = "fa fa-check"></span></div>
            <div className = {`col-8 row ${props.todo.complete ? "mid2" : "mid1"} text-light`}>
                <div className = "col-8">{props.todo.data.task}</div>
                <div className = "col-4 text-align-center">
                    <p>{props.todo.data.date},  {props.todo.data.time}</p>
                </div>
            </div>
            <div className = "col-2 right" onClick = {ondelete}><span className = "fa fa-trash "></span></div>
        </div>
    );
}

export default Todo;