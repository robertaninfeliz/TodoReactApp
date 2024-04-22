import { useState } from 'react';
import './Todo.scss';
function Todo({ todo, update, remove, toggleTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    const handleToggleTodo = () => {
        setIsEditing(!isEditing);
    }

    const handleTodoChange = (event) => {
        setTask(event.target.value)
    }

    const handleTodoUpdate = (event) => {
        event.preventDefault();
        if (task.trim() === "") {
            alert('Todos cant be empty');
        } else {
        update(todo.id, task);
        handleToggleTodo();
        }
    }

    const handleDelete = () => {
        remove(todo.id)
    }

    const handleToggleCompleted = () => {
        toggleTodo(todo.id);
      };

    if (isEditing) {
        return (
            <div className='todo'>
                <form onSubmit={handleTodoUpdate} className='todo_form'>
                <input className="todo__edit-input" onChange={handleTodoChange} value={task} type="text" />
                <button className='todo__form-submit'>Save</button>
                </form>
            </div>
            )
    }

    return (
        <div className="todo">
            <p className={todo.done ? "todo__done": ''} onClick={handleToggleCompleted}>{todo.task}</p>
            <div className="todo__buttons">
                <button onClick={handleToggleTodo} className='todo__button-edit'>Edit</button>
                <button onClick={handleDelete} className='todo__button-delete'>Delete</button>
            </div>
        </div>
    )
}

export default Todo;