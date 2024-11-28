import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Title from '../typo/Title'
import Subs from '../typo/Subs';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axiosClient from '../../axios-client';
import toast from 'react-hot-toast';

export default function EditCompanyJob({info,handleclose,updatetable}) {


    const [data,setdata] = useState({
        // "company_id": info.id,
        "jobtitle": info.jobtitle,
        "jobcategory": info.jobcategory,
        "jobdescription": info.jobdescription,
        "deadline": info.deadline,
        "requirements": info.requirements,
        "jobdurationtype": info.jobdurationtype,
        // "views": info.views,
        "status":info.status
    })

    const updatejob = async(e)=>{
        e.preventDefault()

        await axiosClient.put(`/updatejob/${info.id}`,data)
        .then(({data})=>{
            toast.success(data.message)
            updatetable()
        })
        .catch(err=>{
            console.log(err);
            toast.error(err.message)

        })

        console.log(info.id);

    }



  return (
    <div className='fixed bg-[#252525b5] h-screen top-0 pt-[30px] right-0 w-full flex items-center justify-center py-2 z-20'>


        <div className='bg-white rounded-md md:w-[60%] lg:w-[50%] w-[90%] space-y-5 max-h-full  overflow-y-auto relative'>

            {/* Header */}
            <div className='flex items-center justify-between bg-white top-0 sticky bg z-10 p-3'>
                <Title
                    text={'Add New Job'}
                    otherStyles={'text-primary mb-5'}
                />
                <button  onClick={handleclose}>
                            <FontAwesomeIcon icon={faClose} className='bg-red-700 p-2 rounded-lg text-white'/>
                </button>
            </div>

            <form onSubmit={updatejob} className='w-full h-full grid grid-cols-2 gap-3 p-4'>



                    <div>
                        <InputLabel>Job Categories</InputLabel>
                        <Select
                            placeholder='Job Title'
                            fullWidth
                            value={data.jobcategory}
                            title='Job Title'
                            onChange={(e)=> setdata({...data,jobcategory:e.target.value})}
                            >
                            <MenuItem value={'Technology & IT'}>Technology & IT</MenuItem>
                            <MenuItem value={'Health & Medicine'}>Health & Medicine</MenuItem>
                            <MenuItem value={'Finance & Business'}>Finance & Business</MenuItem>
                            <MenuItem value={'Education & Training'}>Education & Training</MenuItem>
                            <MenuItem value={'Engineering & Manufacturing'}>Engineering & Manufacturing</MenuItem>
                        </Select>

                    </div>

                    <div>

                        <InputLabel>Submission Deadline</InputLabel>
                        <TextField
                            value={data.deadline}
                            fullWidth
                            type='date'
                            onChange={(e)=> setdata({...data,deadline:e.target.value})}
                        />
                    </div>


                    <div>
                        <InputLabel>Duration Type</InputLabel>
                        <Select
                            fullWidth
                            value={data.jobdurationtype}
                            sx={{mb:3,color:'black'}}
                            onChange={(e)=> setdata({...data,jobdurationtype:e.target.value})}
                        >
                            <MenuItem value={'Negotiable'}>Negotiable</MenuItem>
                            <MenuItem value={'Part-time'}>Part-time</MenuItem>
                            <MenuItem value={'Full-time'}>Full-time</MenuItem>
                        </Select>
                    </div>


                    <TextField
                        placeholder='Job Title'
                        value={data.jobtitle}
                        fullWidth
                        label='Job Title'
                        className='col-span-2'
                        onChange={(e)=> setdata({...data,jobtitle:e.target.value})}
                    />


                    <TextField
                        placeholder='Type the requirement here'
                        fullWidth
                        rows={4}
                        multiline
                        value={data.requirements}
                        label='Job Requirement'
                        sx={{mb:3}}
                        className='col-span-2'
                        onChange={(e)=> setdata({...data,requirements:e.target.value})}
                    />



                    <TextField
                        placeholder='Type the details here'
                        fullWidth
                        rows={8}
                        value={data.jobdescription}
                        multiline
                        label='Job Details'
                        sx={{mb:3}}
                        className='col-span-2'
                        onChange={(e)=> setdata({...data,jobdescription:e.target.value})}
                    />

                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    fullWidth
                    sx={{py:2,mt:2}}
                    className='col-span-2'
                >UPDATE</Button>







            </form>


        </div>


        {/* <div className='bg-white p-4 rounded-md md:w-[60%] lg:w-[50%] w-[90%] space-y-5'>


            <div className='flex items-center justify-between'>
                <Title
                    text={'Add New Job'}
                    otherStyles={'text-primary mb-5'}
                />
                <button  onClick={handleclose}>
                            <FontAwesomeIcon icon={faClose} className='bg-red-700 p-2 rounded-lg text-white'/>
                </button>
            </div>

        <div className='flex-1 h-full'>
            <div className=' py-10 flex flex-col items-center justify-center'>


            </div>

        </div> */}


        {/* </div> */}
    </div>
  )
}
