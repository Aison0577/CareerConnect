import React, { useEffect, useState } from 'react'
import Title from '../../typo/Title'
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { useCompanyStateContext } from '../../contexts/CompanyContextProvider'
import axiosClient from '../../../axios-client'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import CompanyJobDetails from '../../components/CompanyJobDetails'
import EditCompanyJob from '../../components/EditCompanyJob'
import LoadingPage from '../LoadingPage'

function ManageJobs() {

    const { company } = useCompanyStateContext()

    const [jobs,setjobs] = useState([])
    const [selectedJob,setselectedJob] = useState({})
    const [showdetails,setshowdetails]= useState(false);
    const [showedit,setshowedit]= useState(false);

    const toggleDetails = (data)=>{

        setselectedJob(data)

        setshowdetails(selectedJob? true: false)
    }



    const toggleEdit = (data)=>{

        setselectedJob(data)

        setshowedit(selectedJob? true: false)
    }


    const deleteJob = async(id)=>{

        // const payload = {
        //     'job_id':id
        // }

        console.log(id);

        await axiosClient.delete(`/deletejob?job_id=${id}`)
        .then(({data})=>{
            toast.success(data.message)
            getCompanyJobs()
        })
        .catch(err=>{
            console.log(err);
            toast.error(err)

        })
    }



    const getCompanyJobs = async()=>{

        const payload= {
            'company_id':company.id
        }

        // console.log(payload);


        await axiosClient.post('/companyjobs',payload)
        .then(({data})=>{
            setjobs(data.jobs)
        })
        .catch(err=>{
            console.log(err);
            toast.error(err)

        })
    }


    useEffect(()=>{
        getCompanyJobs();
        console.log(selectedJob);

    },[selectedJob])


    if(!jobs){
        return (
            <LoadingPage/>
        )
    }

  return (
    <div className='w-full h-full overflow-hidden flex flex-col'>
        <Title
            text={'All Posted Jobs'}
            otherStyles={'text-primary mb-5'}
        />
        <div className='mb-2'>

            <TextField
                placeholder='Search for Posted Job'
                fullWidth
            />
        </div>
        <div className='flex-1  rounded-md p-2 overflow-y-auto'>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow className='text-center'>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Deadline</TableCell>
                            <TableCell>Views</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Alter</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            jobs.length === 0?
                            <h1 className='fixed h-full flex items-center justify-center'>
                                {/* No Jobs Found */}
                            </h1>:
                            jobs.map((job)=>(

                                <TableRow key={job.id}>
                                    <TableCell>{job.id}</TableCell>
                                    <TableCell className='font-semibold'>{job.jobtitle}</TableCell>
                                    <TableCell>{job.deadline}</TableCell>
                                    <TableCell>{job.views}</TableCell>
                                    <TableCell>
                                        {
                                            job.status === 'active'?
                                            <h1 className='bg-green-300 text-center py-2 rounded-lg italic px-[2px]'>
                                                Active
                                            </h1>:<h1 className='bg-red-300 text-center py-2 rounded-lg italic px-[2px]'>
                                                Disabled
                                            </h1>
                                        }
                                    </TableCell>
                                    <TableCell>
                                        <div className='space-x-3 hidden md:block'>
                                            <button className='hover:scale-105 duration-300 rounded-lg text-green-800 bg-gray-200 p-2 inline-flex' onClick={()=>toggleDetails(job)}>
                                                <FontAwesomeIcon icon={faEye} className='size-4'/>
                                            </button>
                                            <button className='hover:scale-105 duration-300 rounded-lg text-blue-800 bg-gray-200 p-2 inline-flex' >
                                                <FontAwesomeIcon icon={faPen} className='size-4'onClick={()=>toggleEdit(job)}/>
                                            </button>
                                            <button className='hover:scale-105 duration-300 rounded-lg text-red-800 bg-gray-200 p-2 inline-flex'>
                                                <FontAwesomeIcon icon={faTrash} className='size-4' onClick={()=>deleteJob(job.id)}/>
                                            </button>

                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))


                        }
                    </TableBody>
                </Table>

            </TableContainer>
        </div>

        {
            showdetails?<CompanyJobDetails data={selectedJob} handleclose={()=> setshowdetails(false)}/>:''
        }

        {
            showedit?<EditCompanyJob info={selectedJob} updatetable={()=> getCompanyJobs()} handleclose={()=> setshowedit(false)}/>:''
        }

    </div>
  )
}

export default ManageJobs
