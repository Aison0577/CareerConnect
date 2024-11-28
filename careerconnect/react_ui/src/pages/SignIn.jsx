import React, { useState } from 'react'
import Title from '../typo/Title'
import Subs from '../typo/Subs'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import axiosClient from '../../axios-client'
import {useSeekerStateContext} from '../contexts/SeekerContextProvider'
import useSeekerStore from '../StateHolder/StoreSeeker'
import toast from 'react-hot-toast'

function SignIn() {

    const { setToken } = useSeekerStateContext()
    const setuser = useSeekerStore((state)=> state.setUser)

    const route = useNavigate()
    const [data, setdata]= useState({
        'email':'',
        'password':''
    })

    const handleLogin = (e)=>{
        e.preventDefault()

        const payload = data

        axiosClient.post('/login',payload)
        .then(({data})=>{

            console.log(data);

            if(data.message === 'Welcome back'){
                setToken(data.token)
                setuser(data.user)
                toast.success(data.message)
                route('/seekerdash')
            }else{
                toast.error(data.message)
            }

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
    <div className='h-screen w-full'>
      <Header/>

      <div className='flex items-center justify-center h-full mt-[-60px]'>
        <div className=' w-[80%] md:w-[30%] p-3 rounded-md '>
          <Title
            text={'Welcome back 👋'}
            otherStyles={'mb-[-10px]'}
          />
          <Subs
            text={'......'}
            otherStyles={'text-gray-500 mb-10'}
          />


          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label='Email*'
              variant='outlined'
              type='email'
              sx={{mb:2}}
              autoFocus
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

            <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
                sx={{py:2,mt:2}}
                className='col-span-2'
            >Sign In</Button>
          </form>

          <Link to={'/signup'}>
            <Subs text={'Dont have an account? Sign Up'} otherStyles={'text-center my-4'}/>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default SignIn
