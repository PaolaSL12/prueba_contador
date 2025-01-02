import React from 'react'
import "./Score.css";

const Score = ({counter}) => {
  return (
    <p className='score'>{counter}</p>
  )
}

export default Score