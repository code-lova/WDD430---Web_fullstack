import React, { useEffect, useState } from "react";
import "./style.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, SetTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return [];

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
     SetTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  const toggleTodo = (id, completed) => {
    SetTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo;
      })
    })
  }

  const deleteTodo = (id) => {
    SetTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  return (
    <div>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;
