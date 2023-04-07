import React, { useState } from 'react'
import Button from '../ReusableComponent/Button'

const Form = () => {
    let [form,setForm]=useState({
        name:"",
        email:"",
        password:"",
        gender:"",
        verfied:"",
        educated:"",
       

    })

    let {name,email,password,verfied,educated,skilled}=form

    let handleChange=(e)=>{
      let {name,value}=e.target
      setForm({...form,[name]:value})
    }
    
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form);
    }
   
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" value={name}  placeholder='name' onChange={handleChange}/>
        <input type="text" name="email" id=""  value={email} placeholder='email' onChange={handleChange} />
        <input type="text" name="password" id="" password={password} placeholder='password' onChange={handleChange}/>
        <input type="radio" name="gender" id=""  value="male" onChange={handleChange} />male
        <input type="radio" name="gender" value="female" onChange={handleChange}/>female
        <input type="checkbox" name="verfied" id="" value="verified" onChange={handleChange} />verified
        <input type="checkbox" name="educated" id="" value="educated" onChange={handleChange}/> educated
        <Button value={"submit"}/>
        </form>

     
    </div>
  )
}

export default Form