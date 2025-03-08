import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Home />} />
        <Route path='/admin'  element={<Admin/>} />
      </Routes>
    </>
  )
}

export default App
