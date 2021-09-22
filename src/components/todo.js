import React from 'react'

function Todo({todo,toggleComplete, removeTodo}) {
    function handleCheckBoxClick(){
        toggleComplete(todo.id)
    }
    
    function handleRemoveClick(){
        removeTodo(todo.id);
    }
    
    return (
        <div style={{display:'flex'}}>
        <input type="checkbox"  onClick={handleCheckBoxClick}/>
        <li
        style={{color:"white", textDecoration: todo.complete ? "line-through" : null}}
        >{todo.task}</li>
        <button onClick={handleRemoveClick}>X</button>
        </div>
        
        );
}

export default Todo;