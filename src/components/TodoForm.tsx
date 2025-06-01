import React, {useState} from "react";

type Action =
  | {type: "ADD"; payload: string }
  | {type: "DELETE"; payload: number }


type TodoFormProps = {
  dispatch: React.Dispatch<Action>;
}

const TodoForm = ({dispatch}: TodoFormProps) => {

  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim() !== '') {
      dispatch({type: "ADD", payload: text});
      setText('');
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
        <input value={text} onChange={handleChange} type="text" className="flex-1 border p-2 rounded" placeholder="New task..."/>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Add</button>
      </form>
    </>
  )
};

export default TodoForm;