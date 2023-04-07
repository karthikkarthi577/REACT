import React from 'react'
import Button from '../../ReusableComponent/Button';
import Child from './Child';

// ***forword props is nothing but passing data from parent to child****//
let Parent=()=>{
    var data={
        name:"guru",
        age:22
    }
    return(
      <div>
        <Child  name={data.name} age={data.age}/>
        <div className="reusingComponent">
          <Button value={"forword prop"}/>
        </div>
      </div>
    )
}

export default Parent;