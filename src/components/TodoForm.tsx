import React, {useState} from "react";
import type { TodoFormProps } from "../types.ts";

const TodoForm = ({dispatch, inputRef}: TodoFormProps) => {

  const [text, setText] = useState('')

  // const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim() !== '') {
      dispatch({type: "ADD", payload: text});
      setText('');
      inputRef.current?.focus()
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
        <input ref={inputRef} value={text} onChange={handleChange} type="text" className="flex-1 border p-2 rounded" placeholder="New task..."/>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Add</button>
      </form>
    </>
  )
};

export default TodoForm;