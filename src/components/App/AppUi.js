import React from 'react';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Loading } from "../App/Loading"
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm/index';
import { TodoContext } from "../Context/TodoContext"

function AppUi() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
} = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter/>
          <TodoSearch/>

                      <TodoList>
                      {loading && <Loading />}
                      {error && <p>Ocurrió un error.</p>}
                      {(!loading && searchedTodos.length === 0) && <p>Crea tu primera tarea</p>}
                      
                      {searchedTodos.map(todo => (
                        <TodoItem
                          key={todo.text}
                          text={todo.text}
                          completed={todo.completed}
                          onComplete={() => completeTodo(todo.text)}
                          onDelete={() => deleteTodo(todo.text)}
                        />
                      ))}
                    </TodoList>

                    <CreateTodoButton
                      setOpenModal={setOpenModal}
                    />

          {openModal && (
          <Modal>
            <TodoForm />
          </Modal>)}
        </>
      );
}

export { AppUi }