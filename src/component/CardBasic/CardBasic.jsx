import React from 'react'
import './CardBasic.css' 

function CardBasic(props) {
  return (
    <div className='container-card'>
        <img className='image-card'
        src={`../public/images/image_${props.id}.jpg`}
        alt='Image'/>
        <div className='container-text'>
          <p className='tittle-text'>{props.name}</p>
          <p className='work-text'>{props.work}</p>
          <p className='description-test'>{props.description}</p>
        </div>
    </div>
  ) 
}

export default CardBasic