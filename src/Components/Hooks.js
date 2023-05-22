import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setCount(()=>count+1);
        }, 1000);
    })
  return (
    <div className='App'>
        <h3>Count:{count}</h3>
    </div>
  )
}

export default Hooks