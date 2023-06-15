import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import "./App.css";
import { Background } from "./components/Background/Background";

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Curso React', completed: false},
  { text: 'CursoMongoDB', completed: false},
  { text: 'Curso Tailwind', completed: false},
]


function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
        <TodoItem 
        key={todo.text}
        text={todo.text}
        complpeted={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
      <Background />
      </>
  );
}


export default App;