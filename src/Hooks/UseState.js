import React, { useEffect, useState } from 'react'

const UseState = () => {
  const[val,setValue]=useState(0);
  const[calculate,SetCalculate]=useState(0);
    
  const handleChange = () =>{
    setValue(val+1);
  }

  useEffect(()=>{
    SetCalculate(()=>2*val);
  },[val])
  
  return (
    <div>
      <h1>Count: {val}</h1>
      <button onClick={handleChange} className='btn btn-primary'>Click me</button>
      <p>Calculate:{calculate}</p>
    </div>
  )
}

export default UseState