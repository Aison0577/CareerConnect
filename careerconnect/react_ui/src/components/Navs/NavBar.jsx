import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className='p-2 z-10 sticky top-0'>
        <div className='w-full rounded-md p-3 bg-white flex items-center justify-between shadow-lg'>
            <h1 className='font-montserrat font-bold italic text-blue-900'>CareerConnect.</h1>


            {/* nav */}
            <nav className='space-x-2'>
                <Link to={'/signin'} className='text-sm font-montserrat font-medium'>
                    <button className='p-2 bg-blue-400 text-white rounded-md'>
                        Seeker
                    </button>
                </Link>
                <Link to={'/compsignin'} className='text-sm font-montserrat font-medium'>
                    <button className='p-2 bg-blue-400 text-white rounded-md'>
                        Company
                    </button>
                </Link>

            </nav>
        </div>

    </header>
  )
}
