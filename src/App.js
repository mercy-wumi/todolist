import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);
  const[priority, setPriority] = useState("");
  const[date, setDate] = useState("");

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
        case 'urgent':
        setFilteredTodos(todos.filter((todo) => todo.priority === 'urgent'));
        break;
        case 'important':
        setFilteredTodos(todos.filter((todo) => todo.priority === 'important'));
        break;
        case 'random':
        setFilteredTodos(todos.filter((todo) => todo.priority === 'random'));
        break;
        case 'next7days':
        setFilteredTodos(todos.filter((todo) => todo.date === 'next7days'));
        break;
        case 'nextmonth':
        setFilteredTodos(todos.filter((todo) => todo.date === 'nextmonth'));
        break;
        case 'next3months':
        setFilteredTodos(todos.filter((todo) => todo.date === 'next3months'));
        break;
      default:
        setFilteredTodos(todos);
    }
  }

  return (
    <div className="App">
      <Sidebar
      setStatus = {setStatus}/>

      <header className= "header">
      <h1>ToDo List</h1>
      </header>
      <Form 
      todos = {todos} 
      setTodos = {setTodos} 
      inputText = {inputText} 
      setInputText = {setInputText}
      setStatus = {setStatus}
      priority= {priority}
      setPriority = {setPriority}
      date= {date}
      setDate = {setDate}
       />
       
      <Todolist todos = {todos} 
      setTodos = {setTodos}
      filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
