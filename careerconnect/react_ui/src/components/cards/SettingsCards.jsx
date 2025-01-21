import { faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SettingsCards({color,title,sub,handleclick,logo}) {
  return (
    <div className={`p-4 rounded-2xl w-full ${color} text-white shadow-3xl cursor-pointer mb-5 overflow-hidden relative`} onClick={handleclick}>
        <div className='relative'>
            <h1 className='font-bold text-white text-xl font-poppins mb-2'>{title}</h1>
            <p className='text-sm text-gray-300'>{sub}</p>
        </div>
        <FontAwesomeIcon icon={logo} className='absolute -right-2 -bottom-2 text-white size-14 -rotate-45 opacity-25'/>
    </div>
  )
}
