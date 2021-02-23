import React from 'react';

function Form(props){

    const onchange = (e) => {
        props.setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.input !== "" || e.keyCode === 13){
            props.setTodos([
                ...props.todos, {text : props.input, complete : false, id:Math.random() * 1000}
            ])
            props.setInput("");
        }
    }

    return (
        <form className = "form" onSubmit = { handleSubmit }>
            <input 
                type = "text" 
                placeholder = { props.placeholder } 
                value = { props.input } 
                className = "todoInput"
                onChange = { onchange }
            > 
            </input> 
            <button
                className = "todoButton"
            >Add a Todo</button>
        </form>
    )
}
export default Form