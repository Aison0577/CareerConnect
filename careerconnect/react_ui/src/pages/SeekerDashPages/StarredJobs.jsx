import React, { useEffect, useState } from 'react'
import Title from '../../typo/Title'
import axiosClient from '../../../axios-client'
import { useSeekerStateContext } from '../../contexts/SeekerContextProvider'
import toast from 'react-hot-toast'
// import JobsCard from '../../components/JobsCard'
import { Tooltip } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import Subs from '../../typo/Subs'
import JobsCard from '../../components/cards/JobsCard'

export default function StarredJobs() {

    const {user} = useSeekerStateContext()
    const [bookmarks, setbookmarks] = useState([])

    const getbookmarks = async()=>{
        console.log(user.id);

        axiosClient.get(`/starjob/${user.id}`)
        .then(({data})=>{
            console.log(data);
            setbookmarks(data.starred)
        })
        .catch((err)=>{
            const response = err.response

            if(response && response === 422){
                console.log(response.data.message);
                toast.error(response.data.message)
            }

            toast.error(response.data.message)
        })
    }


    const bookmarkjob = async(jobId)=>{
        const payload = {
            // 'job_id':jobId,
            // 'seeker_id':user.id,
        }
        // await axiosClient.post('/starjob',payload)
        // .then(({data})=>{
        //     console.log(data);
        //     toast.success(data.message)
        // })
        // .catch(err=>{
        //     const response = err.response

        //     if(response && response === 422){
        //         console.log(response.data.message);
        //         toast.error(response.data.message)
        //     }

        //     toast.error(response.data.message)
        // })
    }


    useEffect(()=>{
        getbookmarks()
    },[])


  return (
    <div className='w-full h-full overflow-y-auto'>
        <div className=''>
            <div className='sticky top-0 bg-white mb-5 shadow-md z-10 p-4'>
                <Title
                    text={'Starred Jobs'}
                    otherStyles={'text-primary'}
                />
            </div>

            <div  className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-3'>
                {
                    bookmarks.map((job,index)=>(
                        <JobsCard
                            key={index}
                            job={job.job}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
