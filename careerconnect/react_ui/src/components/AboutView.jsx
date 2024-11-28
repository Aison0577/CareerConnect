import React from 'react'

function AboutView({title,info}) {
  return (
    <div className='mb-14'>
      <h1 className='font-poppins font-bold text-lg md:text-xl lg:text-2xl text-center mb-6 text-primary'>{title}</h1>
      <p className='adjust text-center'>{info}</p>
    </div>
  )
}

export default AboutView
