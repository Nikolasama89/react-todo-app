import Todo from "./Todo.tsx";
import React from "react";

type Todo = {
  id: number;
  text: string;
}

type Action =
  | {type: "ADD"; payload: string }
  | {type: "DELETE"; payload: number }


type TodoListProps = {
  todos: Todo[];
  dispatch: React.Dispatch<Action>
}

const TodoList = ({todos, dispatch}: TodoListProps) => {

  const handleDelete = (id:number) => () => {
    dispatch({type: "DELETE", payload: id })
  }
  return (
    <>
      <ul className="space-y-2">
        {todos.map(
          todo => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
              <span>{todo.text}</span>
              <button onClick={handleDelete(todo.id)} className="text-red-800 hover:underline flex-row"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-trash2-icon lucide-trash-2">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                <line x1="10" x2="10" y1="11" y2="17"/>
                <line x1="14" x2="14" y1="11" y2="17"/>
              </svg></button>

            </li>
          )
        )}
      </ul>
    </>
  )
}

export default TodoList;