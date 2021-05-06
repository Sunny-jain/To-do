import React from 'react'

function Switch(props) {
    const darkToggler = () =>{
        props.setDark(!props.dark)
    }

    return (
        <label className = "switch">
            <input type = "checkbox" onClick = {darkToggler}/>
            <span className = "slider" />
        </label>
    )
}

export default Switch;