import React, { useState, useEffect, useRef } from 'react';
import { generateId } from '../Utilities';

function TodoForm(props) {
    const [ input, setInput ] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: generateId(),
            text: input
        });
        setInput('');
    }

    return (
        <div>
            <form 
            className="todo-form"
            onSubmit={handleSubmit} >
            {props.edit ? (<>
            <input 
             type="text"
             placeholder="Edit item"
             value={input}
             name="text"
             className="todo-input edit"
             onChange={handleChange}
             ref={inputRef}/>
            <button className="todo-button edit">Edit Todo</button> 
            </>) : 
            (<>
            <input 
             type="text"
             placeholder="Add a Todo"
             value={input}
             name="text"
             className="todo-input"
             onChange={handleChange}
             ref={inputRef}/>
            <button className="todo-button">Add Todo</button>
            </>)}   
            </form>
        </div>
    )
}

export default TodoForm;
