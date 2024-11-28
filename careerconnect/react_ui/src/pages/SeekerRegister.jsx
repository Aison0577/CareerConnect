import React from 'react'
import Header from '../components/Header'
import RegisterIndividual from '../components/RegisterIndividual'

export default function SeekerRegister() {
  return (
    <div className='h-screen w-full flex flex-col'>
      <Header/>
      <div className='flex-1 py-4'>
        <div className='h-full flex justify-center items-center w-full'>
            <RegisterIndividual/>

        </div>
      </div>
    </div>
  )
}
