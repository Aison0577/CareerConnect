import React, { useState } from 'react'
import Title from '../typo/Title'
import Subs from '../typo/Subs'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axiosClient from '../../axios-client'
// import { useStateContext } from '../contexts/SeekerContextProvider'

function RegisterIndividual() {

    const navigate = useNavigate();

    const [data, setdata] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        jobtype:'',
        confirmPassword:''
    })


    const handleSubmit = (e)=>{
        e.preventDefault()


        if(!data.email || !data.firstname || !data.lastname || !data.password || !data.jobtype){
            return toast.error('Complete the form')
        }

        if(data.confirmPassword !== data.password){
            return toast.error('Password mismatch')
        }

        const payload = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            jobtype: data.jobtype,
            password: data.password,
            password_confirmation: data.confirmPassword
        }

        axiosClient.post('/signup', payload)
        .then(({data})=>{
            toast.success(data.message)
            navigate('/signin')
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


  return (
    <div className=' w-[80%] md:w-[30%] p-3 rounded-md py-10 mx-auto'>
      <Title
        text={'Hello there! 👋'}
        otherStyles={'mb-[-10px]'}
      />

      <Subs
        text={'Sign up now to find job matches that fit your skills and interests!'}
        otherStyles={'text-gray-500 mb-10'}
      />

      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3'>

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
            type='email'
            className='col-span-2'
            value={data.email}
            onChange={(e)=> setdata({...data,email:e.target.value})}
        />


        <Select className='col-span-2' value={data.jobtype} onChange={(e)=> setdata({...data,jobtype:e.target.value})}>
            <MenuItem value={'Technology & IT'}>Technology & IT</MenuItem>
            <MenuItem value={'Health & Medicine'}>Health & Medicine</MenuItem>
            <MenuItem value={'Finance & Business'}>Finance & Business</MenuItem>
            <MenuItem value={'Education & Training'}>Education & Training</MenuItem>
            <MenuItem value={'Engineering & Manufacturing'}>Engineering & Manufacturing</MenuItem>
        </Select>

        <TextField
            fullWidth
            label='Password*'
            variant='outlined'
            type='password'
            value={data.password}
            onChange={(e)=> setdata({...data,password:e.target.value})}

        />

        <TextField
            fullWidth
            label='Confirm Password*'
            variant='outlined'
            type='password'
            sx={{mb:2}}
            value={data.confirmPassword}
            onChange={(e)=> setdata({...data,confirmPassword:e.target.value})}
        />

        <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{py:2,mt:2}}
            className='col-span-2'
        >Sign Up</Button>
      </form>



        <Link to={'/signin'}>
          <Subs text={'Already have an account? Sign In'} otherStyles={'text-center my-4'}/>
        </Link>
    </div>
  )
}

export default RegisterIndividual
