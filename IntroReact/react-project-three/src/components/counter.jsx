import React, { useState } from 'react'

const counter = () => {
        const [count, setCount]= useState(0);

  return (
    <div>counter
        <p>you have clicked {count} times</p>
        <button id='btn' onClick={()=>{ setCount(count+1)}}>click me </button>
    </div>
  )
}

export default counter