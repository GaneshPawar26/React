import React from 'react'
import hero from '../assets/hero.png'
//rafce
import '../components/UserCard.css'


const UserCard = (props) => {
  return (
    <div className='usercard'>UserCard
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={hero} alt='love' ></img>
        <p>Description of Ganesh Pawar</p>
        <hr/>
    </div>
  )
}


export default UserCard