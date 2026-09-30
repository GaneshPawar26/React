import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'

export let a=["Ganesh",0]
function App() {
  const [name, setName] = useState(a)

  return (
    <>
     <div>
      <h3>Heading from App.jsx {name[0]}{name[1]}</h3>
      <Card name={name} setname={setName}/>

      <hr/>
      <hr/>

      <Card2/>
     </div>
    </>
  )
}

export default App
