import React, { useState } from 'react'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axiosClient from '../../../axios-client'

function RegisterCompany() {

    const navigate = useNavigate();

    const [data, setdata] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:''
    })


    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(data);

        if(!data.password || !data.confirmpassword || !data.email || !data.name){
            return toast.error('Complete form')
        }

        if(data.password !== data.confirmpassword){
            return toast.error('Password mismatch')
        }


        const payload = {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.confirmpassword,
        }

        console.log(payload);


        axiosClient.post('/companyregister', payload)
        .then(({data})=>{
            toast.success(data.message)
            navigate('/compsignin')
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
    <div className=' w-[80%] md:w-[30%] p-3 rounded-md py-10 mx-auto'>
      <Title
        text={'Join as a Hiring Partner 💼'}
        otherStyles={'mb-[-10px]'}
      />

      <Subs
        text={'Register your company to connect with top talent and find the perfect hires!'}
        otherStyles={'text-gray-500 mb-10'}
      />

      <form onSubmit={handleSubmit} className=''>

        <TextField
            fullWidth
            label='Company Name*'
            variant='outlined'
            type='text'
            autoFocus
            sx={{mb:2}}
            value={data.name}
            onChange={(e)=> setdata({...data, name:e.target.value})}
        />

        <TextField
            fullWidth
            label='Company Email*'
            variant='outlined'
            type='email'
            sx={{mb:2}}
            value={data.email}
            onChange={(e)=> setdata({...data, email:e.target.value})}
        />


        <TextField
            fullWidth
            label='Password*'
            variant='outlined'
            type='password'
            sx={{mb:2}}
            value={data.password}
            onChange={(e)=> setdata({...data, password:e.target.value})}
        />

        <TextField
        fullWidth
        label='Confirm Password*'
        variant='outlined'
        type='password'
        sx={{mb:2}}
        value={data.confirmpassword}
        onChange={(e)=> setdata({...data, confirmpassword:e.target.value})}

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



      <Link to={'/compsignin'}>
          <Subs text={'Already have an account? Sign In'} otherStyles={'text-center my-4'}/>
        </Link>
    </div>
  )
}

export default RegisterCompany
