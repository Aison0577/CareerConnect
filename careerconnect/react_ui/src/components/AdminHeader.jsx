import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminHeader() {
  return (
    <div className='w-full p-3 bg-primary sticky top-0 z-20'>
        <div className='text-white'>
            
            <Link to={'/docs'}>
                <h1 className='font-montserrat font-semibold text-lg md:text-xl'>CareerConnect.</h1>
            </Link>
        </div>
    </div>
  )
}
