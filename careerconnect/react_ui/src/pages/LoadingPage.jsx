import React from 'react'
import Loading from '../components/Loading'

export default function LoadingPage() {
  return (
    <div className='fixed h-screen w-full top-0 bg-[#000000c0] flex items-center justify-center'>
        <Loading/>
    </div>
  )
}
