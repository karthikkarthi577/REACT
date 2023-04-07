import React, { useEffect, useState } from 'react'

// ******use effect is used for mouting,updating,deleting phase(it is used for performing sideEffects like fetching, interaction with dom etc)*******//
const UseEffect = () => {
    let [state,setState]=useState([])
    let [count,setCount]=useState(0)

    // ****mounting[component did mount] it only executes only once after component is render**//
    useEffect(async()=>{
        let ApiData= await window.fetch("https://jsonplaceholder.typicode.com/posts");
        let JsonData= await ApiData.json()
          setState(JsonData)
          console.log(state);
    },[])

    // ****updating[component did update] executes based on variable of dependecy if varibale is update it executes based on that the updating will have prefrence than mounting face for rendering ****//
    useEffect(()=>{
            console.log(`data${count}`);
    },[count])

   
    // **** unmounting[component will unmount] it will have first preference when we will have mounting,updating because it acts as clean up function so it executes
    useEffect(()=>{
        console.log("one");
        return(()=>{
            console.log("cleanup");
        })
    },[count])
    
  return (
    <div>
        {state.map(x=>{
            return(
                <div key={x.id}>{x.title}</div>
            )
        })}
          <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default UseEffect