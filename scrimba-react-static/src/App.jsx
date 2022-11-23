import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <MainPage />
    </div>
  )
}

export default App
