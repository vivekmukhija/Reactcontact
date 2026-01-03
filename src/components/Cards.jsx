import React from 'react'

const Cards = (props) => {
  return (
    <div className='contact-card'>
      <i className="icon ri-user-line"></i>
      <div className='info'>
        <h1>{props.elem.name.toUpperCase()}</h1>
        <p className='number'>{props.elem.num}</p>
        <p className='email'>{props.elem.email}</p>
      </div>
      <button onClick={() => {
        props.deletehandler(props.idx)
      }}>Delete</button>
    </div>
  )
}

export default Cards
