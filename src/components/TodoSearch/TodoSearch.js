import React, { useState } from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [SearchValue, setSearchValue] = React.useState('');



  return (
    <div className='divSearch'>
    <input className='TodoSearch'
     placeholder='Cortar cebolla' 
     value={SearchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    />
    </div>
  )
}

export { TodoSearch }