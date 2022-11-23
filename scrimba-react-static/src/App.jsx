import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  )
}

export default App
