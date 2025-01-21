import React from 'react'

export default function CategoriesCards({name,totaljobsavailable}) {
  return (
    <div className='border-[1px] rounded-lg p-4 flex bg-white'>
        <div>

        </div>
        <div className='flex-1'>
            <h1 className='font-semibold mb-5'>{name}</h1>

            <p className='text-sm font-medium text-gray-500'>{totaljobsavailable} Jobs Available</p>
        </div>
    </div>
  )
}
