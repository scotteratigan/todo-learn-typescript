import React, { useState } from 'react'
import styled from 'styled-components'
import AddTodo from './AddTodo'
const defaultTodos = require('../defaultTodos.json')

interface TodoItemProps {
  readonly complete: boolean
}

type TodoTypes = {
  name: string
  complete: boolean
}

export default function List() {
  const [todos, setTodos] = useState(defaultTodos)
  const todoClicked = (i: number) => {
    const newTodos = [...todos]
    newTodos[i].complete = !newTodos[i].complete
    setTodos(newTodos)
  }
  const addTodo = (name: string) => {
    const newTodos = [...todos, { name, complete: false }]
    setTodos(newTodos)
  }
  return (
    <>
      <FlexCenterContainer>
        <ul>
          {todos.map((todo: TodoTypes, i: number) => (
            <TodoItem
              key={todo.name + i}
              complete={todo.complete}
              onClick={() => todoClicked(i)}
            >
              {todo.name}
            </TodoItem>
          ))}
        </ul>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <AddTodo addTodoFn={addTodo} />
      </FlexCenterContainer>
    </>
  )
}

const TodoItem = styled.li<TodoItemProps>`
  padding: 1rem;
  color: ${p => (p.complete ? 'grey' : 'black')};
  text-decoration: ${p => (p.complete ? 'line-through' : 'none')};
`

const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
`
