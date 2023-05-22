import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const[desc,setDesc]=useState(0);
     const handleIncre = () =>{
        setCount(count+1);
     }

     const handleDesc = () =>{
        setDesc(desc-1);
     }
   //Method 2nd State
   const[value,setValue]=useState(0);
   const handelIn = () =>{
    setValue(value+1);
   }

   const handleDes =() =>{
    setValue(value-1);
   }
  return (
    <div>
        <h4>Increment:{count}</h4>
        <button className='btn btn-primary' onClick={(e)=>handleIncre(e)}>+</button>
        <h4>Decrement:{desc}</h4>
        <button className='btn btn-primary' onClick={(e)=>handleDesc(e)}>-</button>

        <h3 className='text-danger'>Method 2 </h3>

        <button className='btn btn-primary' onClick={(e)=>handelIn(e)}>Increment</button>
        <h3>Value:{value}</h3>
        <button className='btn btn-primary' onClick={(e)=>handleDes(e)}>Decrement</button>
    </div>
  )
}

export default Counter