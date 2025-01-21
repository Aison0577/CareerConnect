import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axiosClient from '../../../axios-client'
import useSeekerStore from '../../StateHolder/StoreSeeker'

function EditSeeker({user,handleClose}) {

    const setNewInfo = useSeekerStore(state=> state.setUser)

    const [data, setdata] = useState({
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email,
        jobtype:user.jobtype,
    })

    const handleSubmit = async(e)=>{
            e.preventDefault()

            await axiosClient.put(`/updateseeker/${user.id}`, data)
            .then(({data})=>{
                toast.success(data.message)
                console.log(data.user);
                setNewInfo(data.user)
                handleClose()


                // navigate('/compsignin')
            })
            .catch(err=>{
                const response = err.response
                if(response && response === 422){
                    console.log(response.data.errors);
                    toast.error(response.data.message)
                }


                toast.error(response.data.message)
            })



    }


  return (
    <div className='p-4 ease-in-out transition-all duration-500 bg-gray-100 mb-4 rounded-md'>
        <form className='grid grid-cols-2 gap-3' onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label='First Name*'
                variant='outlined'
                type='text'
                autoFocus
                value={data.firstname}
                onChange={(e)=> setdata({...data,firstname:e.target.value})}

            />
            <TextField
                fullWidth
                label='Last Name*'
                variant='outlined'
                type='text'
                value={data.lastname}
                onChange={(e)=> setdata({...data,lastname:e.target.value})}


            />
            <TextField
                fullWidth
                label='Email*'
                variant='outlined'
                disabled
                type='email'
                className='col-span-2'
                value={data.email}
                onChange={(e)=> setdata({...data,email:e.target.value})}
            />

            <div className='w-full col-span-2'>
                <InputLabel className='mb-2'>Job Preference</InputLabel>
                <Select className='col-span-2' value={data.jobtype} fullWidth onChange={(e)=> setdata({...data,jobtype:e.target.value})}>
                    <MenuItem value={'Technology & IT'}>Technology & IT</MenuItem>
                    <MenuItem value={'Health & Medicine'}>Health & Medicine</MenuItem>
                    <MenuItem value={'Finance & Business'}>Finance & Business</MenuItem>
                    <MenuItem value={'Education & Training'}>Education & Training</MenuItem>
                    <MenuItem value={'Engineering & Manufacturing'}>Engineering & Manufacturing</MenuItem>
                </Select>
            </div>



            <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                sx={{py:2,mt:2}}
                className='col-span-2'
            >Update</Button>

        </form>
    </div>
  )
}

export default EditSeeker
