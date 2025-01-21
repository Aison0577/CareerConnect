import React, { useEffect, useState } from 'react'
import Title from '../../typo/Title'
import { CircularProgress, Tooltip } from '@mui/material'
import JobsCard from '../../components/cards/JobsCard'
import axiosClient from '../../../axios-client'
import toast from 'react-hot-toast'
import { useSeekerStateContext } from '../../contexts/SeekerContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faStar } from '@fortawesome/free-solid-svg-icons'

export default function PostedJobs() {

    // console.log(user.jobtype);
    const {user} = useSeekerStateContext()

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
            console.log(data);

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





    useEffect(()=>{
        isAlljobs?_getAlljobs():_getMyjobs()
    },[isAlljobs])

  return (
    <div className='w-full h-full overflow-y-auto'>
        <div className=''>
            <div className='sticky top-0 bg-white mb-5 shadow-md z-10 p-4'>
                <Title
                    text={'Posted Jobs'}
                    otherStyles={'text-primary'}
                />

                <div>
                    {/* <a href="#me"> */}
                        <button onClick={getYourjobs} className={`px-6 py-3 hover:border-gray-500 border-b-[2px] ${!isAlljobs?'border-b-[4px] border-primary':''} `}>For you</button>
                    {/* </a> */}
                    {/* <a href="#all"> */}
                        <button onClick={getAlljobs} className={`px-6 py-3 hover:border-gray-500 border-b-[2px] ${isAlljobs?'border-b-[4px] border-primary':''}`}>All Jobs</button>
                    {/* </a> */}
                </div>
            </div>



                {jobs?
                    <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-3'>
                        {
                            jobs.map((job,index)=>(
                                    <JobsCard
                                        job={job}
                                    key={index}/>
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
