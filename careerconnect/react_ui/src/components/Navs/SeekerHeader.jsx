import { faBell, faBlog, faGear, faList, faPen, faSignOut, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropSideButton from '../buttons/DropSideButton'

export default function SeekerHeader({setCurrentPage}) {

    const [toggle,settoggle] = useState(false)
  return (
    <div className='w-full p-3 bg-primary sticky top-0 z-20'>
        <div className='text-white flex justify-between items-center'>

            <Link to={'/seekerdash'}>
                <h1 className='font-montserrat font-semibold text-lg md:text-xl'>CareerConnect.</h1>
            </Link>

            <div className='flex gap-2'>
                <button className='p-2 bg-[#ffffff14] hover:bg-[#ffffff23] rounded-xl relative'>
                    <FontAwesomeIcon className='size-5' icon={faBell}/>
                </button>
                <button className='p-2 bg-[#ffffff14] hover:bg-[#ffffff23] rounded-xl md:hidden' onClick={()=>settoggle(!toggle)}>
                    <FontAwesomeIcon className='size-5' icon={faList}/>
                </button>
            </div>
        </div>

        <div className={ toggle ? 'md:hidden fixed w-[60%] right-0 h-full top-16 text-white ease-in-out duration-500 bg-primary p-3 bottom-0 flex flex-col justify-between':'fixed ease-out duration-1000 right-[-100%]'}>
            <div className='w-full space-y-3'>
                <DropSideButton
                    title='All Jobs'
                    icon={faBlog}
                    handleClick={()=>{setCurrentPage(0); settoggle(false)}}
                />
                <DropSideButton
                    title='Applied Jobs'
                    icon={faPen}
                    handleClick={()=>{setCurrentPage(1); settoggle(false)}}
                />
                <DropSideButton
                    title='Starred Jobs'
                    icon={faStar}
                    handleClick={()=>{setCurrentPage(2); settoggle(false)}}
                />
                <DropSideButton
                    title='Settings'
                    icon={faGear}
                    handleClick={()=>{setCurrentPage(3); settoggle(false)}}
                />

                </div>

                <button>
                    <FontAwesomeIcon icon={faSignOut} className='mr-3'/>
                    Logout
                </button>
        </div>
    </div>
  )
}
