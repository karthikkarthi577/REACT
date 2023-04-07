import React from 'react'
import {Link} from "react-router-dom"
const ParamsNav = () => {
    let  data="guru"
  return (
    <div>
        <Link to={`/params/${data}`}>
        <h1>Paramsnav</h1>
        </Link>
        <h1>here i am trying to navigate a parameter via link to params component which is stored in url of variable which we can see in browser (shown in app.js)[1]</h1>
    </div>
  )
}

export default ParamsNav