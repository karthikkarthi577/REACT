import React from 'react'

const Counter = ({inc,state}) => {
   
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={inc}>increment</button>
    </div>
  )
}

export default Counter