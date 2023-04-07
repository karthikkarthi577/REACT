import React from 'react'

// const Child = (props) => {
//   return (
//     <div>
//         <div>{props.name}</div>
//         <div>{props.age}</div>
//     </div>
//   )
// }

// ************ destructuring props and using way************//
const Child = ({name,age}) => {
  return (
    <div>
        <div>{name}</div>
        <div>{age}</div>
    </div>
  )
}

export default Child

