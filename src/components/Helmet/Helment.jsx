import React from 'react'

const Helment = (props) => {
  document.title = 'Multimart-' + props.title
  return (
    <div className='w-100'>
      {props.children}
    </div>
  )
}

export default Helment
