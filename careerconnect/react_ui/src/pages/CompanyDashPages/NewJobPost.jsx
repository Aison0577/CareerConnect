import React, { useState } from 'react'
import Title from '../../typo/Title'
import { useCompanyStateContext } from '../../contexts/CompanyContextProvider'
import { Button, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material'
import axiosClient from '../../../axios-client'
import toast from 'react-hot-toast'

export default function NewJobPost() {


    const { company } = useCompanyStateContext()

    console.log(company);


    const [data,setdata] = useState({
        "company_id": company.id,
        "jobtitle": "",
        "jobcategory": "",
        "jobdescription": "",
        "deadline": "",
        "requirements": "",
        "jobdurationtype": "",
        "views": 0,
        "status":"active"
    })

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(data);


        axiosClient.post('/createjobs', data)
        .then(({data})=>{
            console.log(data);

            toast.success(data.message)

            setdata({
                "company_id": company.id,
                "jobtitle": "",
                "jobcategory": "",
                "jobdescription": "",
                "deadline": "",
                "requirements": "",
                "jobdurationtype": "",
                "views": 0,
                "status":"active"
            })

        })
        .catch(err=>{
            // setisLoading(false)
            const response = err.response

            if(response && response === 422){
                console.log(response.data.message);
                // toast.error(response.data.message)
            }

            toast.error(response.data.message)
        })


    }





  return (
    <div className='w-full h-full overflow-hidden flex flex-col'>
        <Title
            text={'Add New Job'}
            otherStyles={'text-primary mb-5'}
        />
        <div className='flex-1 h-full overflow-y-auto'>
            <div className=' py-10 flex flex-col items-center justify-center'>
                <form onSubmit={handleSubmit} className='w-[90%] md:w-[40%] h-full grid grid-cols-2 gap-3'>



                    <div>
                        <InputLabel>Job Categories</InputLabel>
                        <Select

                            fullWidth
                            value={data.jobcategory}

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



                    <div>
                        <InputLabel>Salary</InputLabel>
                        <TextField
                            placeholder='Salary*'
                            fullWidth
                            type='number'
                            className=''
                        />

                    </div>

                    <TextField
                        placeholder='Job Title'
                        fullWidth
                        label='Job Title'
                        value={data.jobtitle}
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
                        multiline
                        label='Job Details'
                        value={data.jobdescription}
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
                >Create</Button>







                </form>

            </div>

        </div>

    </div>
  )
}
