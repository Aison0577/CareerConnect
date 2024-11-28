import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function DropSideButton({icon,title='Button Title',handleClick,showText=''}) {
  return (
    <button onClick={handleClick} className='text-sm font-montserrat font-medium items-center justify-center md:justify-start flex p-3 bg-transparent bg-slate-800 hover:bg-slate-700 w-full rounded-md'>
        <FontAwesomeIcon icon={icon}  className='mr-3 text-blue-800 size-5 hover:text-gray-600'/>
        <h1 className='truncate'>{title}</h1>
    </button>
  )
}
