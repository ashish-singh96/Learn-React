import React, { useState } from 'react'

const Forms = () => {
  const[name,setName]=useState('');
  const handleSubmit =()=>{
    console.log(name);
  }
  return (
    <div>
      <label>Name:</label>
      <input onChange={(e)=>setName(e.target.value)} type='text'/><br></br>
      <button className='btn btn-primary' onClick={handleSubmit()}>Submit</button>
    </div>
  )
}

export default Forms