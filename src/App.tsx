import React from 'react'
import { TodoProvider } from './TodoContext'
import List from './Components/List'
import AddTodo from './Components/AddTodo'
import { FlexCenterContainer } from './Components/Containers'

function App() {
  return (
    <TodoProvider>
      <FlexCenterContainer>
        <List />
      </FlexCenterContainer>
      <FlexCenterContainer>
        <AddTodo />
      </FlexCenterContainer>
    </TodoProvider>
  )
}

export default App
