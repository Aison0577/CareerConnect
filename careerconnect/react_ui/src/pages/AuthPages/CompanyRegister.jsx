import React from 'react'
import Header from '../../components/Navs/Header'
import RegisterCompany from '../../components/forms/RegisterCompany'

export default function CompanyRegister() {
  return (
    <div className='h-screen w-full flex flex-col'>
      <Header/>
      <div className='flex-1 py-4'>
        <div className='h-full flex justify-center items-center w-full'>
            <RegisterCompany/>
        </div>
      </div>
    </div>
  )
}
