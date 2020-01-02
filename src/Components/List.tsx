import React, { useContext, useState } from 'react'
import TodoContext from '../TodoContext'
import styled from 'styled-components'
import AddTodo from './AddTodo'

type TodoLiProps = {
  complete: boolean
}

type TodoTypes = {
  name: string
  complete: boolean
}

export default function List() {
  const { todos } = useContext(TodoContext)
  console.log('todos:', todos)
  const toggleTodoCompleted = (i: number) => {
    // const newTodos = [...todos]
    // newTodos[i].complete = !newTodos[i].complete
    // setTodos(newTodos)
  }
  const addTodo = (name: string) => {
    // const newTodos = [...todos, { name, complete: false }]
    // setTodos(newTodos)
  }
  const removeTodo = (i: number) => {
    // const newTodos = [...todos]
    // newTodos.splice(i, 1)
    // setTodos(newTodos)
  }

  return (
    <>
      <FlexCenterContainer>
        <TodoList>
          {todos.map((todo: TodoTypes, i: number) => (
            <TodoItem key={todo.name + i} complete={todo.complete}>
              <span onClick={() => toggleTodoCompleted(i)}>{todo.name}</span>
              <button onClick={() => removeTodo(i)}>X</button>
            </TodoItem>
          ))}
        </TodoList>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <AddTodo addTodoFn={addTodo} />
      </FlexCenterContainer>
    </>
  )
}

const TodoList = styled.ul`
  list-style-type: none;
`

const TodoItem = styled.li<TodoLiProps>`
  padding: 1rem;
  color: ${p => (p.complete ? 'grey' : 'black')};
  text-decoration: ${p => (p.complete ? 'line-through' : 'none')};
  span {
    margin: 0 1rem;
  }
`

const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
`
