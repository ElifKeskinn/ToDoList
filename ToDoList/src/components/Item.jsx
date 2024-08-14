import React from 'react';
//bu her bir todo adına gibi düşünülecek


function Item({ todo, deleteTodo, toggleComplete }) {
  return (
    <li>
      <input type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
     
       />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <div className="buttons">
        <button className="tasks_button" onClick={() => deleteTodo(todo.id)}>
          <img src="./assets/img/delete.png" alt="Delete" />
        </button>
      </div>
    
    </li>
  );
}

export default Item;
