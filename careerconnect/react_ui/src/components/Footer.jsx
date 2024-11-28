import React from 'react'
import Subs from '../typo/Subs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='w-full px-3 py-16 bg-primary'>
      <div className='adjust text-white'>

        <div className='flex justify-between items-center'>

          {/* Slogan */}
          <div>
            <h1 className='text-xl font-montserrat font-bold'>CarrerConnect.</h1>
            <Subs
              text={'Your Gateway to New Opportunities!'}
              otherStyles={'text-gray-500'}
            />
          </div>

          {/* Links */}
          <div>
            Links
          </div>
        </div>

        <hr className='my-10 border-[1px] border-gray-600' />

        <div className=''>
            <h1 className='font-montserrat text-center'>@Powered by <span className='text-gray-500'>i Develops</span></h1>
        </div>

      </div>
    </div>
  )
}

export default Footer
