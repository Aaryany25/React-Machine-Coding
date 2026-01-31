import React from 'react'

function Button({name,onClick}) {
  return (
    <div className='border px-4 rounded py-2' onClick={onClick}>
      {name}
    </div>
  )
}

export default Button
