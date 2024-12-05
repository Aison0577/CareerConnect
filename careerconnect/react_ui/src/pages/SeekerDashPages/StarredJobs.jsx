import React, { useEffect, useState } from 'react'
import Title from '../../typo/Title'
import axiosClient from '../../../axios-client'
import { useSeekerStateContext } from '../../contexts/SeekerContextProvider'
import toast from 'react-hot-toast'
import JobsCard from '../../components/JobsCard'
import { Tooltip } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import Subs from '../../typo/Subs'

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
        <div className=' adjust'>
            <div className='sticky top-0 bg-white mb-10 z-10'>
                <Title
                    text={'Starred Jobs'}
                    otherStyles={'text-primary'}
                />
            </div>

            <div>
                {
                    bookmarks.map((job,index)=>(
                        <div className='border-b-2 border-gray-400 mb-2'>
                            <div>

                                <div className='flex-1'>
                                    <h1 className='text-xl md:text-xl font-bold font-poppins text-primary mb-[-8px]'>{job.job.jobtitle}</h1>
                                </div>
                            </div>
                            <div className='flex mb-3 items-center justify-end gap-2'>
                                <Tooltip title='Apply'>
                                    <button>
                                        <FontAwesomeIcon icon={faPencil} className='bg-gray-200 text-gray-400 size-4 p-2 rounded-xl'/>
                                    </button>
                                </Tooltip>
                                <Tooltip title='Star'>
                                    <button onClick={()=>bookmarkjob()}>
                                        <FontAwesomeIcon icon={faTrash} className='bg-gray-200 text-gray-400 size-4 p-2 rounded-xl'/>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
