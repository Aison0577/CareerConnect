import { Avatar } from '@mui/material'
import React from 'react'
import Subs from '../typo/Subs'
import stringAvatar from '../constant/StringAvatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ExposeImage from '../constant/CompanyLogo';

export default function JobsCard({job}) {

    console.log(job);
    const route = useNavigate()

    const handleView = ()=> {
            console.log(job.id);
            route(`/job/${job.id}`)
    }


  return (
    <div className='w-full flex items-start justify-center gap-5 pb-3 cursor-pointer' onClick={handleView} >


        {
            job.company.logo?
            <Avatar
                src={ExposeImage({image:job.company.logo})}
                sx={{width:'50px',height:'50px'}}
            />
            :
            <Avatar
                {...stringAvatar(job.company.name || 'Unknown User')}
                sx={{
                    ...stringAvatar( job.company.name || 'Unknown User').sx,
                    width: '50px', // Custom size
                    height: '50px', // Custom size
                }}

            />
        }


        <div className='flex-1'>
            <h1 className='text-xl md:text-xl font-bold font-poppins text-primary mb-[-8px]'>{job.jobtitle}</h1>
            <Subs
                text={job.company.name}
                otherStyles={'text-gray-500 mb-2'}
            />
            <p className='line-clamp-6 text-sm'>
                {job.jobdescription}

            </p>

        </div>

    </div>
  )
}
