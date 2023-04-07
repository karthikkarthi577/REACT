import React from 'react'
import { useParams } from 'react-router-dom';

const Params = () => {

  let {name}=useParams()
  //*****useparams() is used to consume the params(slug) value from the url[3] ****** */
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Params;