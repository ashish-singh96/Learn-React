import React, { useState } from 'react'

const Forms = () => {
    const[name,setName]=useState("");
  return (
    <div className='App'>
        <form>
            <label>Enter your Name:</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        </form>
    </div>
  )
}

export default Forms