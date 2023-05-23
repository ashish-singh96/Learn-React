import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount]=useState(0);
    const[calculate,SetCalculate]=useState(0);

    useEffect(()=>{
        setTimeout(() => {
            SetCalculate(()=>2*count);
        });
    },[count])

  return (
    <div>
        <h3>Count:{count}</h3>
        <button className='btn btn-primary' onClick={()=>setCount((count)=>count+1)}>Click me </button>
        <p>Calculation:{calculate}</p>
    </div>
  )
}

export default UseEffect