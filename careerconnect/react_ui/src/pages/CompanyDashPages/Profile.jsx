import React, { useEffect, useState } from 'react'
import Title from '../../typo/Title'
import { Avatar, Divider, Rating, Stack } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMailBulk, faPhone, faReceipt, faWarning } from '@fortawesome/free-solid-svg-icons'
import Subs from '../../typo/Subs'
import useCompanyStore from '../../StateHolder/StoreCompany'
import stringAvatar from '../../constant/StringAvatar'
import Stats from '../../components/Stats'
import ExposeImage from '../../constant/CompanyLogo'



export default function Profile() {

    const [userinfo,setuserinfo] = useState({})

    const storedCompany = useCompanyStore((state)=> state.company)

    useEffect(()=>{
        setuserinfo(storedCompany)
        console.log(storedCompany);

    },[])

    if(!userinfo){
        return
    }


    const checkCompleteProfile = (user)=>{

        let complete = false

        if(!user.description || !user.phone || !user.location){
            complete = false
        }else{
            complete = true
        }

        return complete

    }

  return (
    <div className='w-full h-full overflow-y-auto'>
    <div className=' adjust'>
        <Title
            text={'Profile'}
            otherStyles={'text-primary mb-10'}
        />

        {/* Company Card */}
        <div className='flex gap-5'>

            {
                userinfo.logo?
                    <Avatar
                        src={ExposeImage({ image: userinfo.logo })}
                        sx={{ width: '80px', height: '80px' }}
                    />
                        :
                    <Avatar
                        {...stringAvatar(userinfo.name || 'Unknown User')}
                        sx={{
                            ...stringAvatar( userinfo.name || 'Unknown User').sx,
                            width: '80px', // Custom size
                            height: '80px', // Custom size
                        }}

                    />
            }



            <div className='flex-1'>
                <Title
                    text={userinfo.name}
                    otherStyles={'truncate'}
                />

                <div className='space-x-10 mb-5'>
                    <div className='inline-flex items-center gap-3 text-gray-600'>
                        <FontAwesomeIcon icon={faMailBulk}/>
                        <Subs
                            text={userinfo.email}
                        />
                    </div>
                    <div className='inline-flex items-center gap-3 text-gray-600'>
                        <FontAwesomeIcon icon={faPhone}/>
                        <Subs
                            text={!userinfo.phone?'Phone number not set':userinfo.phone }
                        />
                    </div>
                </div>

                {/* <div className=' p-3 animate-pulse bg-gray-300'/> */}

                <Subs text={'What we do 👌'} otherStyles={'font-semibold text-primary'}/>
                <h1 className='w-full'>
                   {!userinfo.description?'Description not set':userinfo.description}

                </h1>


                {
                    !checkCompleteProfile(userinfo)?
                    <h1 className='w-full p-2 rounded-lg bg-red-200 text-center mt-[20px]'>
                        <FontAwesomeIcon icon={faWarning} className='text-red-900 mr-3'/>
                        Complete Profile to Unlock Other Features
                    </h1>:<h1 className='w-full p-2 rounded-lg bg-green-200 text-center my-[20px] '>
                        <FontAwesomeIcon icon={faCheck} className='text-green-900 mr-3'/>
                        Verified 🎉
                    </h1>
                }

            </div>

        </div>

        <Divider sx={{my:5}}/>

        <Stats/>

        <Rating sx={{mb:2}}/>


        <Stack direction={'row'} overflow={'scroll'} spacing={2}>
            <h1 className='p-2 rounded-md bg-gray-200'>
                Active Job Applications:
                <span className='font-semibold'> 0</span>
            </h1>
            <h1 className='p-2 rounded-md bg-gray-200'>
                Pending Response:
                <span className='font-semibold'> 0</span>
            </h1>

        </Stack>



        {/* <GraphicEqSharp/> */}
    </div>
    </div>
  )
}
