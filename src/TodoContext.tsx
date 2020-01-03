import React, { FunctionComponent, useState } from 'react'
const defaultTodos = require('./defaultTodos.json')

const TodoContext = React.createContext({
  todos: [],
  toggleTodoCompleted: (i: number) => {},
  addTodo: (name: string) => {},
  removeTodo: (i: number) => {},
})

const Provider = TodoContext.Provider

export const TodoProvider: FunctionComponent = props => {
  const [todos, setTodos] = useState(defaultTodos)
  const toggleTodoCompleted = (i: number) => {
    const newTodos = [...todos]
    newTodos[i].complete = !newTodos[i].complete
    setTodos(newTodos)
  }
  const addTodo = (name: string) => {
    const newTodos = [...todos, { name, complete: false }]
    setTodos(newTodos)
  }
  const removeTodo = (i: number) => {
    const newTodos = [...todos]
    newTodos.splice(i, 1)
    setTodos(newTodos)
  }
  return (
    <Provider value={{ todos, toggleTodoCompleted, addTodo, removeTodo }}>
      {props.children}
    </Provider>
  )
}
export default TodoContext
// export const TodoConsumer = TodoContext.Consumer
