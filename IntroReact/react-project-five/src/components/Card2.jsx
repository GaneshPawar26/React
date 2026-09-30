import React, { useState } from 'react'
import { a } from '../App'

const Card2 = () => {
  const [num, setNum] = useState(0)
 
    if(num==0)
    {
        return ( <button onClick={()=>{setNum(1)}} >login</button>)
    
    }
    else
    {
        return(
            <button onClick={()=>{setNum(0)}}>Logout</button>    
        )            
        
    }
  
}

export default Card2