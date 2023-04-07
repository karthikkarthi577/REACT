import React, { useState } from 'react'
import axios from "axios"

const Axiospost = () => {
  let [state,setState]=useState({
    name:"",
    password:""
  })

  let handleChange=(e)=>{
    let {name,value}=e.target
    setState({...state,[name]:value})
  }
  let handleSubmit=async (e)=>{
    e.preventDefault()
     await axios.post("https://apidata2-68fcb-default-rtdb.firebaseio.com/state.json",state)
     alert(`posted sucessfully`)

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <input type="text"  value={state.name} placeholder='enter name'  name="name" onChange={handleChange}/>
      <input type="text" value={state.password} placeholder='enterpassword' name='password' onChange={handleChange}/>
      <button>submit</button>
      </form>
    </div>
  )
}

export default Axiospost;