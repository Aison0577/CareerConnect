import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Subs from '../../typo/Subs'
import stringAvatar from '../../constant/StringAvatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import ExposeImage from '../../constant/CompanyLogo';
import { BookmarkAddedSharp, BookmarkAddOutlined, Star, Tag } from '@mui/icons-material';
import axiosClient from '../../../axios-client';
import { useSeekerStateContext } from '../../contexts/SeekerContextProvider';
import toast from 'react-hot-toast';

export default function JobsCard({job}) {

    // console.log(job);
    const route = useNavigate()

    const {user} = useSeekerStateContext()

    const handleView = ()=> {
            console.log(job.id);
            route(`/job/${job.id}`)
    }
    const [isStarred,setisStarred] = useState(false)


    const bookmarkjob = async(jobId)=>{
            setisStarred((prev)=> !prev)
            const payload = {
                'job_id':jobId,
                'seeker_id':user.id,
            }
            await axiosClient.post('/starjob',payload)
            .then(({data})=>{
                console.log(data);
                toast.success(data.message)
            })
            .catch(err=>{
                const response = err.response
                if(response && response === 422){
                    console.log(response.data.message);
                    toast.error(response.data.message)
                }
                toast.error(response.data.message)
            })
        }


        
        useEffect(()=>{
            setisStarred(job.isStarred)
            console.log(job.isStarred);

        },[])
  return (
    <div className='w-full flex items-start justify-center gap-3 p-4 cursor-pointer bg-white shadow-md rounded-md overflow-hidden flex-col'>

        {/* Content */}
        <Link to={`/job/${job.id}`}>
            <div className='flex items-start gap-3'>
                <div className='size-14 min-w-[56px] rounded-xl bg-blue-300/25 overflow-hidden'>
                    <img src={ExposeImage({image:job.company.logo})} alt="" className='object-cover w-full h-full'/>
                </div>
                <div className='flex-1 overflow-hidden'>
                    <h1 className='w-full font-montserrat font-bold text-sm line-clamp-1'>{job.jobtitle}</h1>
                    <p className='text-xs line-clamp-1'>{job.company.name}</p>
                </div>

            </div>

            <h1 className='text-sm font-medium my-2 text-gray-600 line-clamp-1'>
                <FontAwesomeIcon icon={faLocation}/> {job.company.location}
            </h1>

            <div className='grid grid-cols-2 text-xs gap-4 text-center text-blue-950 items-center justify-center font-medium w-full mb-2'>
                {/* <h1 className='text-center'>{job.deadline}</h1> */}
                <h1 className='text-center'>{job.jobdurationtype}</h1>
                <h1 className='text-center'>{'Salary'}</h1>
            </div>



            <p className='line-clamp-3 text-sm'>{job.jobdescription}</p>

        </Link>

        {/* Actions */}
        <div className='flex items-center justify-end w-full'>
            <IconButton onClick={()=> bookmarkjob(job.id)}>
                {isStarred? <BookmarkAddedSharp/>:<BookmarkAddOutlined/>}
            </IconButton>
                {/* <BookmarkAddedSharp/> */}
        </div>

    </div>
  )
}
