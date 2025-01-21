import React, { useState } from 'react'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Navs/Header'
import axiosClient from '../../../axios-client'
import useCompanyStore from '../../StateHolder/StoreCompany'
import toast from 'react-hot-toast'
import { useCompanyStateContext } from '../../contexts/CompanyContextProvider'

function CompanySignIn() {


    const route = useNavigate()

    const {setToken} = useCompanyStateContext()
    const setcompany  = useCompanyStore((state)=> state.setCompany)

    const [data,setdata]= useState({
        email:'',
        password:'',
    })


    const handleLogin = (e)=>{
        e.preventDefault()



        const payload = {
            email: data.email,
            password: data.password
        }

        // setisLoading(true)

        axiosClient.post('/companylogin', payload)
        .then(({data})=>{


            if(data.message === 'Welcome back'){
                setToken(data.token)
                setcompany(data.company)
                toast.success(data.message)
                route('/dashboard')
            }else{
                toast.error(data.message)
            }



        })
        .catch(err=>{
            // setisLoading(false)
            const response = err.response
            toast.error(response.data.message)
        })


    }
  return (
    <div className='h-screen w-full'>
      <Header/>

      <div className='flex items-center justify-center h-full mt-[-60px]'>
        <div className=' w-[80%] md:w-[30%] p-3 rounded-md '>
          <Title
            text={'Company Access 💼'}
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
              onChange={(e)=> setdata({...data,email:e.target.value})}
            />
            <TextField
              fullWidth
              label='Password*'
              variant='outlined'
              type='password'
              sx={{mb:2}}
              value={data.password}
              onChange={(e)=> setdata({...data,password:e.target.value})}

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

          <Link to={'/compsignup'}>
            <Subs text={'Dont have an account? Sign Up'} otherStyles={'text-center my-4'}/>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default CompanySignIn
