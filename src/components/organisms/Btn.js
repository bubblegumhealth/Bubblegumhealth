import React from 'react'

function Btn({text,className ,asLink}) {
  return (
    <button className={`btn ${className}`} >{text}</button>
  )
}

export default Btn