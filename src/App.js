import React, { /*useState,*/ useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";
import Todo from './components/Todo/Todo';
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import ClearTodo from "./components/ClearTodo/ClearTodo";

function todoReducer(taskState, action) {
  switch (action.type) {
    case 'update': {
      return taskState.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, task: action.updatedTask}
        }
        return todo;
      })
    }
    case 'delete': {
      return taskState.filter((todo) => todo.id !== action.id);
    }
    case 'add': {
      return [...taskState, {
        id: uuidv4(),
        task: action.task,
        done:false
      }]
    }
    case 'toggle': {
      return taskState.map(todo => {
        if (todo.id === action.id) {
          return {...todo, done: !todo.done}
        }
        return todo;
      })
    }
    case 'clear': {
      return taskState.filter((todo) => !todo.done)
    }
  }
}

function App() {
  const [taskState, dispatch] = useReducer(todoReducer, [
    { id: uuidv4(), task: 'task 1', done: true },
    { id: uuidv4(), task: 'task 2', done: false },
    { id: uuidv4(), task: 'task 3', done: false },
  ]);


  const update = (todoId, updatedTask) => {
    dispatch({
      type: 'update',
      id: todoId,
      updatedTask: updatedTask
    })
  }

  const remove = (todoId) => {
    dispatch({
      type: 'delete',
      id: todoId
    })
  }

  const addTodo = (task) => {
    dispatch({
      type: 'add',
      task: task
    })
  }

  const toggleTodo = (todoId) => {
    dispatch({
      type: 'toggle',
      id: todoId
    })
  }

  const clearTodos = () => {
    dispatch({
      type: 'clear'
    })
  }

  const todoList = taskState.map((todo) => <Todo key={todo.id} update={update} remove={remove}todo={todo} toggleTodo={toggleTodo} />)

  return (
    <div className="todo__container">
     <Header />
      <div className="todo__content">
        {todoList}
      </div>
      <footer>
      <ClearTodo onClearTodos={clearTodos}/>
      <AddTodo onAddTodo={addTodo} />
      </footer>
    </div>
  );
}

export default App;
