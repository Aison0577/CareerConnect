import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../../../axios-client'
import toast from 'react-hot-toast'
import SeekerHeader from '../../components/SeekerHeader'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Divider } from '@mui/material'
import ApplicationPage from './ApplicationPage'
import ExposeImage from '../../constant/CompanyLogo'
import stringAvatar from '../../constant/StringAvatar'

export default function ViewJobDetails() {

    const {id} = useParams()

    const [details, setdetails] = useState()

    const getDetails = async()=>{
        await axiosClient.get(`/job/${id}`)
        .then(({data})=>{
            console.log(data.job.company.logo);

            // console.log(`Company Image   ${details.company.logo}`);
            setdetails(data.job)
        })
        .catch(err=>{
            console.log(err);
            toast.error(err.message)

        })

    }

    useEffect(()=>{
        let isMounted = true;


        if (isMounted) {
            getDetails();
        }

        return () => {
            isMounted = false;
        };
    },[])

  return (
    <div>
            <SeekerHeader/>
            {
                details?
                    <div className='adjust py-10'>
                        <div className='mb-10'>
                            {/* cOMPANY DETAILS */}
                            <div className='flex items-center justify-center w-full gap-3'>
                                <div>
                                    {
                                            console.log(ExposeImage({image:details.company.logo}))

                                    }
                                    {
                                        details.company.logo?
                                        <div>
                                            <Avatar
                                                src={ExposeImage({ image: details.company.logo })}
                                                sx={{ width: '50px', height: '50px' }}
                                            />
                                                {console.log(ExposeImage({image:details.company.logo}))}

                                        </div>
                                            :
                                            <div>
                                                {console.log(ExposeImage({image:details.company.logo}))}
                                                <Avatar
                                                {...stringAvatar(details.company.name || 'Unknown User')}
                                                sx={{
                                                    ...stringAvatar( details.company.name || 'Unknown User').sx,
                                                    width: '50px', // Custom size
                                                    height: '50px', // Custom size
                                                }}

                                            />
                                        </div>

                                    }
                                </div>
                                <Title text={details.company.name} otherStyles={'text-center text-gray-500'}/>
                            </div>

                            {/* OTHER INFOMATION */}
                            <Subs text={details.company.description} otherStyles={'text-center text-gray-400'}/>
                            <Subs text={details.company.location} otherStyles={'text-center text-gray-400 mt-[-8px]'}/>

                        </div>
                        <Title
                            text={details.jobtitle}
                            otherStyles={'mb-2 text-center text-primary'}
                        />

                        <div className='grid grid-cols-2 text-blue-700 items-center justify-center'>
                            <div className='flex gap-2 items-center mb-2 justify-center'>
                                <FontAwesomeIcon className='size-5' icon={faBriefcase}/>
                                <Subs
                                    text={details.company.name}
                                    otherStyles={'text-gray-600'}
                                />
                            </div>
                            <div className='flex gap-2 items-center mb-2 justify-center'>
                                <FontAwesomeIcon className='size-5' icon={faClock}/>
                                <Subs
                                    text={details.jobdurationtype}
                                    otherStyles={'text-gray-600'}
                                />
                            </div>
                            <div className='flex flex-col md:flex-row justify-center md:justify-between gap-3 adjust items-center col-span-2'>
                                <h1 className='flex gap-2 items-center font-bold justify-center'>
                                    Category:
                                    <span className='text-gray-600 '>{details.jobcategory}</span>
                                </h1>
                                <h1 className='flex gap-2 text-red-700 items-center font-bold justify-center'>
                                    Deadline:
                                    <span className='text-gray-600 '>{details.deadline}</span>
                                </h1>
                            </div>

                        </div>
                        <Divider sx={{my:4}}/>

                        <>
                            <h1 className='font-semibold text-lg text-gray-400 mb-4'>Details</h1>
                            <p>
                                {details.jobdescription}
                            </p>

                            <h1 className='font-semibold text-lg text-gray-400 my-4 '>Requirements</h1>
                            <p className='mb-10'>
                                {details.requirements}
                            </p>
                        </>

                        {/* <div className='space-x-3 my-4 flex items-center'>
                            <button>
                                <FontAwesomeIcon icon={faStar} className='bg-gray-200 text-gray-400 size-5 p-2 rounded-xl'/>
                            </button>


                        </div>

                        <Link to={`/apply/${details.jobtitle}/${details.id}`}>
                            <button className='bg-blue-600 text-sm py-[15px] px-6 rounded-md font-montserrat font-medium text-white w-full'>
                                Apply Now
                            </button>
                        </Link> */}

                        <ApplicationPage/>



                    </div>
                :
                    <div className='py-10 adjust animate-pulse'>
                        <div className='p-6 bg-gray-200 mb-3'/>
                        {/* Subs */}
                        <div className='p-2 w-[30%] bg-gray-200 mb-3'/>
                        <div className='p-2 w-[30%] bg-gray-200 mb-3'/>
                        <div className='p-2 w-[30%] bg-gray-200 mb-3'/>

                        {/* Paragraph */}
                        <div className='p-2 bg-gray-200 mb-3'/>
                        <div className='p-2 bg-gray-200 mb-3'/>
                        <div className='p-2 bg-gray-200 mb-3'/>
                        <div className='p-2 bg-gray-200 mb-3'/>

                        {/* other Button */}
                        <div className='w-full space-x-3'>
                            <div className='size-10 rounded-md inline-flex bg-gray-200'/>
                            <div className='size-10 rounded-md inline-flex bg-gray-200'/>
                            <div className='size-10 rounded-md inline-flex bg-gray-200'/>
                            <div className='size-10 rounded-md inline-flex bg-gray-200'/>
                        </div>

                    </div>
            }


    </div>
  )
}
