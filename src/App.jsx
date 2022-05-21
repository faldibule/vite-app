import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Welocome from './Pages/Welocome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Welocome />
    </div>
  )
}

export default App
