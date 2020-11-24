import React from 'react'
import doubleArrow from '../icons/double_arrow.png'

const DoubleArrow = ({ text }) => {
  return (
    <div className='scroll'>
      <p className='scroll__text'>{text}</p>
      <img src={doubleArrow} alt='double_arrow' />
    </div>
  )
}

export default DoubleArrow
