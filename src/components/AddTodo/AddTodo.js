import { useState } from "react";
import './AddTodo.scss';

function AddTodo({onAddTodo}){
    const [task, setTask] = useState('');
    
    const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) {
        alert('Todos cannot be empty');
    } else {
    onAddTodo(task);
    setTask(''); 
    }
  };

    return (
    <form className="addTodo" onSubmit={handleSubmit}>
    <input
      className="addTodo__input"
      type="text"
      value={task}
      onChange={handleChange}
      placeholder="Conquer the world..."
    />
    <button className="addTodo__button" type="submit">Add Todo</button>
  </form> );
}

export default AddTodo;