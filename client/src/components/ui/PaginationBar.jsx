import React from 'react'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import ArrowRight from '../../assets/icons/ArrowRight'
const PaginationBar = () => {
  return (
    <div className='flex bg-blue-800 px-5 py-2 rounded-full'>
      <ArrowLeft/>
        
      <ArrowRight/>
    </div>
  )
}

export default PaginationBar