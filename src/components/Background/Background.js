import React from 'react';
import './Background.css';
import background from './background.png'

const Background = () => {
  return (
    <div className='BackgroundDiv'>
        <img className='backgroundImg' src={background} alt='imagen-de-fondo'/>
    </div>
  )
}

export {Background}