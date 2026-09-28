import React from 'react'

const Button = (props) => {
  return (
    <div>
    
    <h3>Button</h3>
    <button onClick={props.onclick}>click me</button>
    </div>
  )
}

export default Button