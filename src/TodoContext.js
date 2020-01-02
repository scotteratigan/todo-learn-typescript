import React from 'react'
const defaultTodos = require('./defaultTodos.json')

const TodoContext = React.createContext({ todos: defaultTodos })

const Provider = TodoContext.Provider

export const TodoProvider = props => {
  return <Provider value={{ todos: defaultTodos }}>{props.children}</Provider>
}
export const TodoConsumer = TodoContext.Consumer
export default TodoContext
