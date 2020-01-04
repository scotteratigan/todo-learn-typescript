import React, { useContext, useState } from 'react'
import TodoContext from '../TodoContext'
import { PrimaryButton } from './Buttons'
import { checkServerIdentity } from 'tls'

export default function AddTodo() {
  const [todoText, setTodoText] = useState('')
  const { addTodo } = useContext(TodoContext)
  const addTodoToList = () => {
    if (todoText.trim().length < 1) return
    addTodo(todoText)
    setTodoText('')
  }
  const checkToSubmit = (key: string) => {
    if (key === 'Enter') addTodoToList()
  }
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        onKeyDown={e => checkToSubmit(e.key)}
      ></input>
      <PrimaryButton onClick={addTodoToList}>Add Todo</PrimaryButton>
    </div>
  )
}
