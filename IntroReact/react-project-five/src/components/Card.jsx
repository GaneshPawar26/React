//here we are updating the value of state and this updated vvalue is directly traversed to parent component itself= this concept is lifting state up


import React from 'react'

import App from '../App.jsx'

const Card = (props) => {
  return (
    <div>Card
    {/* <App/> */}

<button onClick={()=>{props.setname(["Suresh", props.name[1] + 1])}}>click me to change my name and increment the number</button>
    <p> taken name from parent: my name is : {props.name[0]} and value is :{props.name[1]}</p>
    </div>
    
  )
}

export default Card