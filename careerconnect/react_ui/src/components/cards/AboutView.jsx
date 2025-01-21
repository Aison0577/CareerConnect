import React from 'react'

function AboutView({title,info}) {
  return (
    <div className='text-left p-4 bg-white border-t-4 transition-all border-blue-700 transition group duration-200 relative overflow-hidden hover:bg-[#161313da] hover:text-white cursor-pointer'>
      <h1 className='font-poppins font-bold text-lg md:text-xl lg:text-2xl mb-6 text-primary  group-hover:text-white'>{title}</h1>
      <p className=''>{info}</p>

      {/* <div className='size-16 absolute bg-white rounded-full grid items-center justify-center overflow-hidden right-[-30px] top-[-30px]'>
        <div className='size-14 bg-blue-400 rounded-full grid items-center justify-center overflow-hidden group-hover:animate-ping'>
            <div className='bg-blue-800 rounded-full size-10  group-hover:animate-none'></div>
        </div>
      </div> */}
    </div>
  )
}

export default AboutView
