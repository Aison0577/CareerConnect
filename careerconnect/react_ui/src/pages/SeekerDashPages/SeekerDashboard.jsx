import React, { useState } from 'react'
import CustomSudeButton from '../../components/CustomSudeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBlog, faCompass, faGear, faGears, faNetworkWired, faPen, faSignOut, faStar, faToolbox } from '@fortawesome/free-solid-svg-icons'
import SeekerHeader from '../../components/SeekerHeader'
import PostedJobs from './PostedJobs'
import SeekerProfile from './SeekerProfile'
import StarredJobs from './StarredJobs'

export default function SeekerDashboard() {

    // const {currentPage,setcurrentPage} = useCompanyStateContext()
    // const cPage = localStorage.getItem('currentpage')
    const [current,setcurrent] = useState(0)



    const pages = [
        <PostedJobs/>,
        2,
        <StarredJobs/>,
        <SeekerProfile/>,
    ]

    const handleChange=(page)=>{
        setcurrent(page)
        // localStorage.setItem('currentpage', page)
    }


  return (
    <div className='bg-white h-screen  w-full flex  flex-col'>
        <SeekerHeader setCurrentPage={setcurrent}/>
        <main className='flex-1 h-full max-h-full overflow-hidden flex py-3'>
            <div className=' flex-1 h-full w-full max-h-full min-h-full p-3'>
                {pages[current]}
            </div>


            <aside className='hidden h-full w-[13%] md:w-[16%] p-3 md:flex justify-between items-center flex-col max-h-full min-h-full overflow-y-auto border-l-2 border-gray-500'>
                <div className='w-full space-y-3'>
                    <CustomSudeButton
                        title='All Jobs'
                        icon={faBlog}
                        handleClick={()=>handleChange(0)}
                    />
                    <CustomSudeButton
                        title='Applied Jobs'
                        icon={faPen}
                        handleClick={()=>handleChange(1)}
                    />
                    <CustomSudeButton
                        title='Starred Jobs'
                        icon={faStar}
                        handleClick={()=>handleChange(2)}
                    />
                    <CustomSudeButton
                        title='Settings'
                        icon={faGear}
                        handleClick={()=>handleChange(3)}
                    />

                </div>

                <button>
                    <FontAwesomeIcon icon={faSignOut} className='mr-3'/>
                    Logout
                </button>

            </aside>
        </main>



    </div>
  )
}
