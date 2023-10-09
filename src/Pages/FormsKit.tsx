import React, { FC } from 'react'

const   GradientKit:FC<any> = ({children}) => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
        <div className="gradient">
        
        {children }
        
        </div>
    </div>
  )
}

export default GradientKit
