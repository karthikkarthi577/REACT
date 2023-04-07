import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    let [state,setState]=useState(0)
  return (
    <div>
        <span>count value <h1>{state}</h1></span>
       <Child data={setState}/>
    </div>
  )
}

export default Parent