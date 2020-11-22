import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList'

function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  },[])
  useEffect(() => {
    filterHandler();
    saveToLocalStorage();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
    
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default: 
        setFilteredTodos(todos)
        break;
    }
  }

  const saveToLocalStorage = () => {
    
      localStorage.setItem('todos', JSON.stringify(todos))
    
  }
  const getLocalStorage = () =>{
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoFromLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoFromLocal)
    }
  }
  return (
    <div className="App">
        <header>Grocery List</header>       
        <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} /> 
        <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
