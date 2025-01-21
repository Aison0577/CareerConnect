import React, { useEffect } from 'react'
import Footer from '../components/Navs/Footer'
import Title from '../typo/Title'
import CategoriesCards from '../components/cards/CategoriesCards'
import NavBar from '../components/Navs/NavBar'
import About from '../components/sections/About'
import { Avatar, AvatarGroup, Stack, TextField } from '@mui/material'
import SeekerRegister from './AuthPages/SeekerRegister'
import RegisterIndividual from '../components/forms/RegisterIndividual'
import SignUp from './AuthPages/SignUp'

function LandingPage() {

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })
  return (
    <main>
        <NavBar/>
        <section className='adjust text-center p-16 md:px-[160px] space-y-5'>
            <h6 className='text-sm font-medium text-blue-900'>#1 JOB PORTAL</h6>
            <p className='font-montserrat font-bold text-4xl md:text-5xl'>Build your very own job  portal with CareerConnect</p>
            <p className='text-gray-600 font-medium mb-10'>Discover your next career move with confidence and ease</p>

            <div className='w-full'>
                {/* <input
                    type="text"
                    placeholder='Search for job here*'
                className='p-4 border-gray-400 outline-none w-full border-2 rounded-xl my-8 bg-transparent'/> */}
                <TextField
                    fullWidth
                    sx={{my:3}}
                    slotProps={{

                    }}
                    placeholder='Search for job here*'
                />
            </div>

            <div className='flex items-center w-full'>
                <AvatarGroup>
                    <Avatar/>
                    <Avatar/>
                    <Avatar/>
                </AvatarGroup>
            </div>
        </section>
        <div className=' bg-primary text-center text-white p-4 py-24'>
            <h1 className='text-lg mb-7'>Trusted by 100+ Ghana's best Universities</h1>
            <div className='grid grid-cols-4 md:grid-cols-7 items-center justify-center'>
                <h1 className='font-bold text-2xl italic'>UCC</h1>
                <h1 className='font-bold text-2xl italic'>UPSA</h1>
                <h1 className='font-bold text-2xl italic'>LEGON</h1>
                <h1 className='font-bold text-2xl italic'>ATU</h1>
                <h1 className='font-bold text-2xl italic'>KTU</h1>
                <h1 className='font-bold text-2xl italic'>KNUST</h1>
                <h1 className='font-bold text-2xl italic'>ASHESI</h1>
            </div>
        </div>
        <section className='space-y-6 p-16 bg-white'>
            <Title
                text={'Job Categories'}
                otherStyles={'font-montserrat text-center'}
            />

            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 adjust'>
                <CategoriesCards name={'Marketing & Communication'} totaljobsavailable={30}/>
                <CategoriesCards name={'Design & Development'} totaljobsavailable={30}/>
                <CategoriesCards name={'Human Research & Developemnt'} totaljobsavailable={30}/>
                <CategoriesCards name={'Finance Management'} totaljobsavailable={30}/>
                <CategoriesCards name={'Business & Consulting'} totaljobsavailable={30}/>
                <CategoriesCards name={'Project Management'} totaljobsavailable={30}/>

            </div>
        </section>
        <About/>

        <section className='bg-white py-16'>
            <SignUp/>
        </section>
        <Footer/>
    </main>
  )
}

export default LandingPage
