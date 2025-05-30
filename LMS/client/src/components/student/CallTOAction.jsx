import React from 'react'
import { assets } from '../../assets/assets'

const CallTOAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font font-semibold'>Learn Anything , anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Incident sint fugiat fdsffd reff ekfef efkefdnf fddereferks reekdf ejddddnfen edef ddsdsddcf.</p>
      <div className='flex items-center font-medium gap-6 mt-4 '>
        <button className=' px-10 py-3 rounded-md text-white bg-green-600 '>Get Started</button>
        <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="arrow icon" /></button>
      </div>
    </div>
  )
}

export default CallTOAction