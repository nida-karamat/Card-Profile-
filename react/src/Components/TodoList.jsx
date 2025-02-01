import React, { useState } from 'react'

 const TodoList = () => {
    const [todo ,setTodo]=useState([]);
    const [inputValue,setInputValue]=useState("");
    const handleSubmit= (e) =>{
        e.preventDefault()

        if(inputValue.trim()){
            setTodo([...todo ,inputValue])
            setInputValue("");
        }
    }
    const changeHandle = (e) =>{
        setInputValue(e.target.value);
    }


  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <label></label>
            <input type="text" name='name' value={inputValue} onChange={changeHandle} placeholder='enter something'/>
            <button type='submit'>Todo List</button>
        </form>

        <ul>
            {todo.map((todo ,index)=>(
                <li key={index}>{todo}

                </li>
            ))}
        </ul>
    </div>
  )
}
export default TodoList;
