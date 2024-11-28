import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Title from '../typo/Title'
import Subs from '../typo/Subs';
import { Divider } from '@mui/material';

export default function CompanyJobDetails({data,handleclose}) {
    console.log(data);
  return (
    <div className='fixed bg-[#252525b5] h-full py-10 top-0 right-0 w-full flex items-center justify-center z-20'>


        <div className='bg-white rounded-md md:w-[60%] lg:w-[50%] w-[90%] space-y-5 max-h-full overflow-y-auto '>

            {/* Head */}
            <div className='flex items-center justify-between sticky top-0 p-3 bg-white'>

                <Title
                    text={data.jobtitle}
                    otherStyles={'mb-2 text-primary'}
                />
                <button  onClick={handleclose}>
                    <FontAwesomeIcon icon={faClose} className='bg-red-700 p-2 rounded-lg text-white'/>
                </button>
            </div>

            <div className='p-4'>
                {/* Sub main */}
                <div className='space-y-1 mb-5'>
                    <Subs
                        text={`Category:  ${data.jobcategory}`}
                    />
                    <Subs
                        text={`Deadline:  ${data.deadline}`}
                    />
                    <Subs
                        text={`Work time:  ${data.jobdurationtype}`}
                    />
                </div>
                <div>
                    <h1 className='font-semibold text-lg text-gray-400'>Requirements</h1>
                    <Subs
                        text={`${data.requirements}`}
                    />
                </div>
                <div>
                    <h1 className='font-semibold text-lg text-gray-400'>Job Details</h1>
                    <Subs
                        text={`${data.jobdescription}`}
                    />
                </div>

                <Divider
                    sx={{my:4}}
                />

                <div className='space-x-2'>
                    <Subs
                        text={`View: ${data.views}`}
                        otherStyles={'p-2 bg-gray-200 rounded-lg inline-flex'}
                    />
                    <Subs
                        text={`Status: ${data.status}`}
                        otherStyles={ `${data.status==='active'?'bg-green-200':'bg-red-200'} p-2 rounded-lg  inline-flex`}
                    />

                </div>
            </div>

        </div>
    </div>
  )
}
