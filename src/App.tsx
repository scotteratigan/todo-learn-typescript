import React from 'react'
import { TodoProvider } from './TodoContext'
import List from './Components/List'

function App() {
  return (
    <TodoProvider>
      <List />
    </TodoProvider>
  )
}

export default App
