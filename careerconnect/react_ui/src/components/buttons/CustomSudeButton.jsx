import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function CustomSudeButton({icon,title='Button Title',link}) {
  return (
    <Link to={link}>
        <button className='text-sm font-montserrat font-medium items-center justify-center md:justify-start flex p-3 bg-transparent hover:bg-slate-200 w-full rounded-md'>
            <FontAwesomeIcon icon={icon}  className='mr-3 text-blue-800 size-5 hover:text-gray-600'/>
            <h1 className='truncate md:block hidden'>{title}</h1>
        </button>
    </Link>
  )
}
