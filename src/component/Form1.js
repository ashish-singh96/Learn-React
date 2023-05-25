import React from 'react'

const Form1 = () => {
    const inputvalue=React.createRef();
    const handleSubmit =()=>{
        console.log(inputvalue.current.value);
    }
  return (
    <div>
        <label>Name:</label>
        <input type='text' ref={inputvalue}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form1