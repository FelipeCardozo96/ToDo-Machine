import React, { useState } from 'react';
import './TodoCounter.css';
import image from "./backgroundheader.png"
import { TodoContext } from '../Context/TodoContext';

function TodoCounter({ total, completed }) {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <div className='divCounter'>
    <h1 className='TodoCounter'>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    <img className='img1' src={image} alt='imagen-de-header'/>
    </h1>
    </div>
  );
}

export { TodoCounter };