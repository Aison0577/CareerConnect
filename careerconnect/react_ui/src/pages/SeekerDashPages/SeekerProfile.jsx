import React, { useEffect, useState } from 'react'
import { useSeekerStateContext } from '../../contexts/SeekerContextProvider'
import Title from '../../typo/Title';
import stringAvatar from '../../constant/StringAvatar';
import { Avatar } from '@mui/material';
import Subs from '../../typo/Subs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faMailBulk, faPaperclip, faPhone, faShield, faTools } from '@fortawesome/free-solid-svg-icons';
import SettingsCards from '../../components/cards/SettingsCards';
import EditSeeker from './EditSeeker';
import axiosClient from '../../../axios-client';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useSeekerStore from '../../StateHolder/StoreSeeker';

export default function SeekerProfile() {
    const [userinfo,setuserinfo] = useState({})
    const navigate = useNavigate()
    const { user } = useSeekerStateContext()
    const removeuser = useSeekerStore(state=> state.removeuser)

    // console.log(user);

    useEffect(()=>{
        setuserinfo(user)
    },[user])

    const [toggleEdit, settoggleEdit] = useState(false)

    const deleteAccount = async()=>{
        await axiosClient.delete(`/deleteaccount/${user.id}`)
        .then(({data})=>{
            toast.success(data.message)
            removeuser()
            navigate('/')
        })
        .catch(err=>{
            const response = err.response
            if(response && response === 422){
                console.log(response.data.errors);
                toast.error(response.data.message)
            }


            toast.error(response.data.message)
        })
    }

  return (
    <div className='h-full w-full overflow-y-auto'>
    <div className='h-full adjust'>
        <Title
            text={'Settings'}
            otherStyles={'text-primary mb-10'}
        />

        <div className='flex gap-5 border-b-2 py-3 mb-5'>
            <Avatar
                {...stringAvatar(`${userinfo.firstname} ${userinfo.lastname}` || 'Unknown User')}
                sx={{
                    ...stringAvatar( `${userinfo.firstname} ${userinfo.lastname}` || 'Unknown User').sx,
                    width: '80px', // Custom size
                    height: '80px', // Custom size
                }}
            />

            <div className='flex-1'>
                <Title
                    text={`${userinfo.firstname} ${userinfo.lastname}`}
                    otherStyles={'truncate'}
                />

                <div className='flex md:flex-row flex-col mb-5 md:gap-6'>
                    <div className='flex items-center gap-3 text-gray-600'>
                        <FontAwesomeIcon icon={faMailBulk}/>
                        <Subs
                            text={userinfo.email}
                        />
                    </div>
                    <div className='flex items-center gap-3 text-gray-600'>
                        <FontAwesomeIcon icon={faTools}/>
                        <Subs
                            text={ userinfo.jobtype }
                        />
                    </div>
                </div>


            </div>
        </div>

        <div>
            <SettingsCards
                color={'bg-primary'}
                title={'Edit Profile'}
                logo={faPaperclip}
                sub={'Update your profile now and make the most out of your experience! 🚀'}
                handleclick={()=>{settoggleEdit(!toggleEdit)}}
            />

            {
                toggleEdit?
                <EditSeeker
                    user={userinfo}
                    handleClose={()=>{settoggleEdit(false)}}
                />:''
            }

            <SettingsCards
                color={'bg-blue-800'}
                title={'Security Changes'}
                logo={faShield}
                sub={'Update your password to enhance your account security! 🔒'}
                handleclick={()=>{}}
            />

            <SettingsCards
                color={'bg-red-800'}
                title={'Delete Account'}
                logo={faCancel}
                sub={'Delete your account permanently and say goodbye to all your data! ⚠️'}
                handleclick={deleteAccount}
            />
        </div>
    </div>
    </div>
  )
}
