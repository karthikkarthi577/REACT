import React from 'react';
import "./Enhanced-border.css"

// hoc is nothing but higher order component which takes component as input and returns a component.it is mainly used to create once logic and reuse it for many items and it aviods prop drilling.[1]
const Enhancedborder = (Styledborder) => {

    function data(){
        return (
            <div className='border'>
                 <Styledborder/>
            </div>
           
          )
    }

     return data;

 
}

export default Enhancedborder