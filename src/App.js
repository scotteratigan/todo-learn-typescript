import React from 'react'
import { TodoProvider } from './TodoContext'
import List from './Components/List.tsx'

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <List />
      </div>
    </TodoProvider>
  )
}

export default App
