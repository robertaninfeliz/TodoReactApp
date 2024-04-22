import './ClearTodo.scss';

function ClearTodo({onClearTodos}) {
    return <button onClick={onClearTodos} className="clearTodo" type="submit">Clear Todos</button>


}

export default ClearTodo;