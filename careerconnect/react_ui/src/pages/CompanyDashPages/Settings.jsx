import React, { useEffect, useState } from 'react'
import Title from '../../typo/Title'
import useCompanyStore from '../../StateHolder/StoreCompany'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCancel, faCheck, faPaperclip, faPen, faShield, faTrash, faWarning } from '@fortawesome/free-solid-svg-icons'
import CompanyUpdateForm from '../../components/CompanyUpdateForm'
import SettingsCards from '../../components/SettingsCards'
import axiosClient from '../../../axios-client'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Settings() {

    const [userinfo,setuserinfo] = useState({})
    const [showUpdateForm,setshowUpdateForm] = useState(false)
    const navigate = useNavigate()

    const storedCompany = useCompanyStore((state)=> state.company)

    const checkCompleteProfile = (user)=>{

        let complete = false

        if(!user.description || !user.phone || !user.location){
            complete = false
        }else{
            complete = true
        }

        return complete

    }

    const deleteAllJobs = async()=>{
        const company_id = userinfo.id

        // console.log(company_id);
        await axiosClient.delete(`/companyjob/${company_id}/delete`)
        .then(({data})=>{
            toast.success(data.message)
        })
        .catch(err=>{
            const response = err.response

            if(response && response === 422){
                console.log(response.data.message);
                toast.error(response.data.message)
            }

            toast.error(response.data.message)
        })

    }


    const deleteAccount = async()=>{
        const company_id = userinfo.id

        // console.log(company_id);
        await axiosClient.delete(`/companyaccount/delete/${company_id}`)
        .then(({data})=>{
            toast.success(data.message)
            navigate('/')
        })
        .catch(err=>{
            const response = err.response

            if(response && response === 422){
                console.log(response.data.message);
                toast.error(response.data.message)
            }

            toast.error(response.data.message)
        })

    }

    useEffect(()=>{
        setuserinfo(storedCompany)
        console.log(storedCompany);

    },[storedCompany])

    if(!userinfo){
        return
    }




  return (
    <div className='w-full h-full overflow-hidden flex flex-col bg-white'>
        <div className='sticky top-0 w-full bg-white p-2'>
            <Title
                text={'Settings'}
                otherStyles={'text-primary mb-10'}
            />
        </div>
        <div className='adjust overflow-y-auto px-3 py-5 scroll-smooth'>
                {
                    !checkCompleteProfile(userinfo)?
                    <h1 className='w-full p-2 rounded-lg bg-red-200 text-center my-[20px]'>
                        <FontAwesomeIcon icon={faWarning} className='text-red-900 mr-3'/>
                        Complete Profile to Unlock Other Features
                    </h1>:<h1 className='w-full p-2 rounded-lg bg-green-200 text-center my-[20px] '>
                        <FontAwesomeIcon icon={faCheck} className='text-green-900 mr-3'/>
                        Verified 🎉
                    </h1>
                }

                <SettingsCards
                    color={'bg-primary'}
                    title={'Update Profile'}
                    logo={faPaperclip}
                    sub={'Update your profile now to unlock exclusive features and make the most out of your experience! 🚀'}
                    handleclick={()=>{setshowUpdateForm(!showUpdateForm)}}
                />

                {
                    showUpdateForm?
                    <CompanyUpdateForm data={userinfo} toggleShow={()=> setshowUpdateForm(false)}/>:''
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
                    title={'Delete Company Jobs'}
                    sub={'Remove your company’s job posting to keep your listings up to date! 🗑️'}
                    logo={faTrash}
                    handleclick={deleteAllJobs}
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
  )
}

export default Settings
