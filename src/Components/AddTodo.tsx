import React, { useContext, useState } from 'react'
import TodoContext from '../TodoContext'
import { PrimaryButton } from './Buttons'

export default function AddTodo() {
  const [todoText, setTodoText] = useState('')
  const { addTodo } = useContext(TodoContext)
  const addTodoToList = () => {
    if (todoText.trim().length < 1) return
    addTodo(todoText)
    setTodoText('')
  }
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      ></input>
      <PrimaryButton onClick={addTodoToList}>Add Todo</PrimaryButton>
    </div>
  )
}
