import React from 'react'

const Movies = (props) => {
  return (
    <div className='main'>
    <div className='movie'>
       <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>{props.Year}</p>
    </div>
    </div>
  )
}

export default Movies