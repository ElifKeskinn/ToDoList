import React, { useState } from 'react';
import addButtonImg from '../../public/assets/img/add_button.png'; 

function Input({ addTodo , markAllComplete }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.length === 0) {
        alert('There is nothing to do ^_^');
        return;
      }
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="todoTop">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="todoInput"
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>
        <img src={addButtonImg} alt="Add" />
       Do {/* yap diye emir vermek komik olur diye düşündüm ^_^ */}
      </button>
      <button onClick={markAllComplete}>
        <input type="checkbox" />
        Mark All as Completed
      </button>
    </div>
  );
}

export default Input;
