import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 


function AddTodo() {
   const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
    <div className='flex justify-center mb-7'>
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-[#404040] rounded border border-neutral-700 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-900 text-base outline-none text-neutral-300 w-96 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-black/100 border-0 py-2 px-6 focus:outline-none hover:bg-black/50 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    </div>
    </>
  )
}

export default AddTodo



