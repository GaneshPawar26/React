import { useState } from 'react'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Hii this is from app.jsx</p>
      <UserCard   name="Ganesh"/>
      <p>you clicked button this much times: {count}</p>
      <button onClick={()=>
      {
        setCount(count+1);
      }}>click me</button>
      

    </div>
  )
}

export default App
