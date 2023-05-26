import React, { useState } from 'react'

function Us() {
    const[count,setCount]=useState(0);
    const[obj,setObj]=useState({msg:"Hello World"})
  return (
    <div>
        <h1>Count:{count}</h1>
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Click me</button>
        <h4>{obj.msg}</h4>
    </div>
  )
}

export default Us