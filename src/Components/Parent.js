import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[data,setData]=useState("Ashish");
  return (
    <div className='App'>
        <Child name={data} setname={setData}/>
        <button onClick={()=>setData("Ashish")}>Reset it</button>
    </div>
  )
}

export default Parent