import React from 'react';
import './TodoCounter.css';
import image from "./backgroundheader.png"

function TodoCounter({ total, completed }) {
  return (
    <div className='divCounter'>
    <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    <img className='img1' src={image} alt='imagen-de-header'/>
    </h1>
    </div>
  );
}

export { TodoCounter };