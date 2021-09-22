import React, { useState,useEffect } from 'react';
import './App.css';
import TodoForm from './components/FormToDo';
import TodoList from './components/ListToDo';


const LOCLAL_STORAGE_KEY ="ract-todo-list-todos";
function App() {
  const [todos,setTodos]=useState([]);
 

  useEffect(() => {
  const storageTodos = JSON.parse(localStorage.getItem(LOCLAL_STORAGE_KEY));
  if(storageTodos){
    setTodos(storageTodos);
  }
}, [todos]);

  useEffect(() => {
      localStorage.setItem(LOCLAL_STORAGE_KEY, JSON.stringify((todos)))
  }, [todos])
    
  function addTodo(todo){ 
      setTodos([todo,...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo =>{
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
        };
        }
        return todo;
      } )
    )
  }

  function removeTodod(id){
    setTodos(todos.filter(todo =>todo.id !==id));
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodod={removeTodod}/>
      </header>
    </div>
  );
}

export default App;
