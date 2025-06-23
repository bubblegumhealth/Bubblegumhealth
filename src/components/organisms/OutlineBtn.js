import React from 'react'

function OutlineBtn({text,className}) {
  return (
    <button className={`${className} border border-amber-500 text-amber-500 rounded-md cursor-pointer`} >{text}</button>
  )
}


export default OutlineBtn