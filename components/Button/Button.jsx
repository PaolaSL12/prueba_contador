import React from 'react'
import './Button.css'

const Button = ({funct, className, text}) => {
  return (
    <button onClick={funct} className={className}>{text}</button>
  )
}

export default Button