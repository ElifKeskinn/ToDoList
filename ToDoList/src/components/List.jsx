import React from 'react';
import Item from './Item';

function List({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul id="liste">
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}

export default List;
