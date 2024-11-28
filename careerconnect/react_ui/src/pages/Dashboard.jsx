import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import CustomSudeButton from '../components/CustomSudeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCompass, faGear, faNetworkWired, faPen, faSignOut, faToolbox } from '@fortawesome/free-solid-svg-icons'
// import { useCompanyStateContext } from '../contexts/CompanyContextProvider'
import ManageApplicants from './CompanyDashPages/ManageApplicants'
import ManageJobs from './CompanyDashPages/ManageJobs'
import Profile from './CompanyDashPages/Profile'
import NewJobPost from './CompanyDashPages/NewJobPost'
import Settings from './CompanyDashPages/Settings'
import useCompanyStore from '../StateHolder/StoreCompany'

export default function Dashboard() {

    const [current,setcurrent] = useState( 0 )

    const storedCompany = useCompanyStore((state)=> state.company)

    const checkCompleteProfile = (user)=>{

        let complete = false

        if(!user.description || !user.phone || !user.location){
            complete = false
        }else{
            complete = true
        }

        return complete

    }



    const pages = [
        <Profile/>,
        <NewJobPost/>,
        <ManageJobs/>,
        <ManageApplicants/>,
        <Settings/>
    ]

    const handleChange=(page)=>{
        setcurrent(page)
        // localStorage.setItem('currentpage', page)
    }


  return (
    <div className='bg-white h-screen  w-full flex  flex-col'>
        <AdminHeader/>
        <main className='flex-1 h-full max-h-full overflow-hidden flex py-3'>
            <aside className='hidden h-full w-[13%] md:w-[16%] p-3 md:flex justify-between items-center flex-col max-h-full min-h-full overflow-y-auto border-r-2 border-gray-500'>
                <div className='w-full space-y-3'>
                    <CustomSudeButton
                        title='Company Profile'
                        icon={faNetworkWired}
                        handleClick={()=>handleChange(0)}
                    />
                    {
                        checkCompleteProfile(storedCompany)?<>
                            <CustomSudeButton
                                title='Create new Job'
                                icon={faPen}
                                handleClick={()=>handleChange(1)}
                            />
                            <CustomSudeButton
                                title='Manage Jobs'
                                icon={faAddressBook}
                                handleClick={()=>handleChange(2)}
                            />
                            <CustomSudeButton
                                title='Manage Applicants'
                                icon={faToolbox}
                                handleClick={()=>handleChange(3)}
                            />
                        </>
                    :''
                    }
                    <CustomSudeButton
                        title='Settings'
                        icon={faGear}
                        handleClick={()=>handleChange(4)}
                    />

                </div>

                <button>
                    <FontAwesomeIcon icon={faSignOut} className='mr-3'/>
                    Logout
                </button>

            </aside>

            <div className=' flex-1 h-full w-full max-h-full min-h-full p-3'>
                {pages[current]}
            </div>



        </main>



    </div>
  )
}
