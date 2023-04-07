import React, { useState } from 'react'

const CounterLogic = (Data) => {
    let [state,setState]=useState(0)

    let increment=()=>{
        setState(state+1)
    }
    let HocCounterLogic=()=>{
        return <Data state={state} inc={increment}/>
    }

  return HocCounterLogic
}

export default CounterLogic