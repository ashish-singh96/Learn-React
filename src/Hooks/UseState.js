import React, { useState } from 'react'

const UseState = () => {
    const[data,setData]=useState("Ashish");
    const handlechane = () =>{
      setData("Shivam");
    }
    const[location,setLocation]=useState("Delhi")
  return (
    <div>
         <h3 className='text-secondary'>Name:{data}</h3>
         <h6>Update state</h6>
         <button onClick={(e)=>handlechane(e)}>Click me to change the name</button>
         <h3 className='text-secondary'>location:{location}</h3>
    </div>
  )
}

export default UseState