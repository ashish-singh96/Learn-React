import React from 'react'

const Child = (props) => {
    const handleChange = () =>{
        props.setdata("ashish_bhadauirya__");
    }
  return (
    <div>
        <h3>UserName:{props.data}</h3>
        <button  className='btn btn-primary' onClick={(e)=>handleChange(e)}>Click me to change tha Data</button>
    </div>
  )
}

export default Child