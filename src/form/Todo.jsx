import { useReducer, useState } from "react";
import todoReducer from "./TodoReducer";
import './todo.css';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <>
	 <div className="Todo">
      <h1 >Todo List</h1>
		<div className="addpart">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>

        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <DeleteIcon className="delete" onClick={() => handleRemoveTodo(todo.id)}/>
          </li>
        ))}
      </ul>
		</div>
    </>
  );
};

export default TodoApp;
