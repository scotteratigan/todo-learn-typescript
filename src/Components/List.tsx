import React, { useContext } from 'react'
import TodoContext from '../TodoContext'
import styled from 'styled-components'

export default function List() {
  const { todos, toggleTodoCompleted, removeTodo } = useContext(TodoContext)

  type TodoTypes = {
    name: string
    complete: boolean
  }

  return (
    <TodoList>
      {todos.map((todo: TodoTypes, i: number) => (
        <TodoItem key={todo.name + i} complete={todo.complete}>
          <span onClick={() => toggleTodoCompleted(i)}>{todo.name}</span>
          <button onClick={() => removeTodo(i)}>X</button>
        </TodoItem>
      ))}
    </TodoList>
  )
}

const TodoList = styled.ul`
  list-style-type: none;
`

const TodoItem = styled.li<{ complete: boolean }>`
  padding: 1rem;
  color: ${p => (p.complete ? 'grey' : 'black')};
  text-decoration: ${p => (p.complete ? 'line-through' : 'none')};
  span {
    margin: 0 1rem;
  }
`
