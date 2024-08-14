import { useState } from 'react'
import Input from './components/Input';
import List from './components/List';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');


  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
  };

  const markAllComplete = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };


  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };



  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

 
  return (
    <div className="container">
      <Input addTodo={addTodo} markAllComplete={markAllComplete} />
      <h4>Tasks to do ({todos.length})</h4>
      <List todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default App
