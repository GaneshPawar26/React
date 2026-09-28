import React from 'react'

const Card = (props) => {
  return (
    <div>Card-card hello {props.name}
    <p> Card child</p>
    <p>below is child taken from props of app.jsx {props.children}</p>
    </div>
  )
}

export default Card