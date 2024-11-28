import React, { useEffect, useState } from 'react'
import Title from '../../typo/Title'
import { CircularProgress, Tooltip } from '@mui/material'
import JobsCard from '../../components/JobsCard'
import axiosClient from '../../../axios-client'
import toast from 'react-hot-toast'
import { useSeekerStateContext } from '../../contexts/SeekerContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faStar } from '@fortawesome/free-solid-svg-icons'

export default function PostedJobs() {

    const {user} = useSeekerStateContext()

    // console.log(user.jobtype);


    const [isAlljobs, setisAlljobs]=useState(false)
    const [jobs,setjobs] = useState([])



    const getYourjobs=()=>{
        setisAlljobs(false)
        // _getMyjobs
    }


    const getAlljobs=()=>{
        setisAlljobs(true)
        // _getAlljobs()
    }

    const _getAlljobs =async()=>{
        await axiosClient.get('/getalljobs')
        .then(({data})=>{
            setjobs(data.jobs)
            setisAlljobs(true)
        })
        .catch(err=>{
            console.log(err);
            toast.error(err)
        })
    }


    const _getMyjobs =async()=>{

        const payload = {
            'jobtype': user.jobtype
        }

        await axiosClient.post('/foryoujobs',payload)
        .then(({data})=>{
            console.log(data);

            setjobs(data.jobs)
            setisAlljobs(false)
        })
        .catch(err=>{
            console.log(err);
            toast.error(err)
        })
    }

    const bookmarkjob = async(jobId)=>{
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
        isAlljobs?_getAlljobs():_getMyjobs()
    },[isAlljobs])

  return (
    <div className='w-full h-full overflow-y-auto'>
        <div className=' adjust'>
            <div className='sticky top-0 bg-white mb-10 z-10'>
                <Title
                    text={'Posted Jobs'}
                    otherStyles={'text-primary'}
                />

                <div>
                    <button onClick={getYourjobs} className={`px-6 py-3 hover:border-gray-500 border-b-[2px] ${!isAlljobs?'border-b-[4px] border-primary':''} `}>For you</button>
                    <button onClick={getAlljobs} className={`px-6 py-3 hover:border-gray-500 border-b-[2px] ${isAlljobs?'border-b-[4px] border-primary':''}`}>All Jobs</button>
                </div>
            </div>



                {jobs?
                    <div className='w-full adjust'>

                        {
                            jobs.map((job,index)=>(
                                <div className='border-b-2 border-gray-400 mb-2'>
                                    <JobsCard
                                        job={job}
                                    key={index}/>
                                    <div className='flex mb-3 items-center justify-end gap-2'>
                                        <Tooltip title='Apply'>
                                            <button>
                                                <FontAwesomeIcon icon={faPencil} className='bg-gray-200 text-gray-400 size-4 p-2 rounded-xl'/>
                                            </button>
                                        </Tooltip>
                                        <Tooltip title='Star'>
                                            <button onClick={()=>bookmarkjob(job.id)}>
                                                <FontAwesomeIcon icon={faStar} className='bg-gray-200 text-gray-400 size-4 p-2 rounded-xl'/>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            ))
                        }

                    </div>



                :
                    <div className='w-full items-center justify-center flex'>
                        <CircularProgress/>
                    </div>
                }


        </div>
    </div>
  )
}
