import React from 'react'

const Child = ({data}) => {
   
    
  return (
    <div>
     <button onClick={()=>data(1)}>button1</button>
     <button>button2</button>
     <button>button3</button>
    </div>
  )
}

export default Child