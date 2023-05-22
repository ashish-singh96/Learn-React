import React, { useState } from 'react';

const Counter = () => {

     const[value,SetValue]=useState(0);

    const handelIncre=()=>{
        SetValue(value+1);
    }

    const handleDec=()=>{
        SetValue(value-1);
    }
  return (
    <div>
    <h1>{value}</h1>
    <button onClick={(event)=>handelIncre(event)}>Inc</button>
    <button onClick={(event)=>handleDec(event)}>Dec</button>
    </div>
  )
}

export default Counter