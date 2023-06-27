import React from 'react';
import { AppUi } from './AppUi';
import "./App.css";
import { TodoProvider } from '../Context/TodoContext';
/* import { Background } from "../Background/Background"; */




function App() {

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  )

}

export default App;
