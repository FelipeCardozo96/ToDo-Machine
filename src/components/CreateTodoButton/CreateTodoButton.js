import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
  return (
    <div className='divButton'>
    <button className='Boton1'
        onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
    >+</button>
    </div>
  )
}

export { CreateTodoButton }