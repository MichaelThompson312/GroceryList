import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="App">
        <header>Grocery List</header>       
        <Form/> 
        <TodoList/>
    </div>
  );
}

export default App;
