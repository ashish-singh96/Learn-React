import React, { useState } from 'react'

const Child = (props) => {
    // const[name,setName]=useState("Ashish");
    const handleChange = () =>{
        props.setname("Singh");
    }
  return (
    <div className='App'>
        <h3>UserName:{props.name}</h3>
        <button onClick={(e)=>handleChange(e)}>Click me</button>
    </div>
  )
}

export default Child