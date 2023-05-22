import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[name,setname]=useState("Ashish");
  return (
    <div>
        <Child data={name} setdata={setname}/>
        <br></br>
        <button className='btn btn-success' onClick={(e)=>setname("Ashish")}>Click me to reset the data</button>
    </div>
  )
}

export default Parent