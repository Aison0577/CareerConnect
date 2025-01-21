import React, { useState } from 'react'
import CustomSudeButton from '../../components/buttons/CustomSudeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBlog, faCompass, faGear, faGears, faNetworkWired, faPen, faSignOut, faStar, faToolbox } from '@fortawesome/free-solid-svg-icons'
import SeekerHeader from '../../components/Navs/SeekerHeader'
import PostedJobs from './PostedJobs'
import SeekerProfile from './SeekerProfile'
import StarredJobs from './StarredJobs'
import { Outlet } from 'react-router-dom'

export default function SeekerDashboard() {




  return (
    <div className='bg-[#fffefe7c] h-screen  w-full flex  flex-col'>
        <SeekerHeader/>
        <div className='flex-1 h-full max-h-full overflow-hidden flex'>
            <main className='flex-1 h-full w-full max-h-full min-h-full'>
                <Outlet/>
            </main>


            <aside className='hidden h-full w-[13%] md:w-[16%] p-3 md:flex justify-between items-center flex-col max-h-full min-h-full overflow-y-auto border-l-2 border-gray-500'>
                <div className='w-full space-y-3'>
                    <CustomSudeButton
                        title='All Jobs'
                        icon={faBlog}
                        link={'jobs'}
                    />
                    <CustomSudeButton
                        title='Applied Jobs'
                        icon={faPen}
                        link={''}
                    />
                    <CustomSudeButton
                        title='Starred Jobs'
                        icon={faStar}
                        link={'favjobs'}
                    />
                    <CustomSudeButton
                        title='Settings'
                        icon={faGear}
                        link={'profile'}
                    />

                </div>

                <button>
                    <FontAwesomeIcon icon={faSignOut} className='mr-3'/>
                    Logout
                </button>

            </aside>
        </div>



    </div>
  )
}
