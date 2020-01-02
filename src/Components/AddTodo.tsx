import React, { useState } from 'react'
import { PrimaryButton } from './Buttons'

type Props = {
  addTodoFn: (todoText: string) => void
}

export default function AddTodo({ addTodoFn }: Props) {
  const [todoText, setTodoText] = useState('')
  const addTodoToList = () => {
    if (todoText.trim().length < 1) return
    addTodoFn(todoText)
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
