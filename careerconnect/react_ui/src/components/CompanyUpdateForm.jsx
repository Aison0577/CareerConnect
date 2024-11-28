import { faImage, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../axios-client'
import toast from 'react-hot-toast'
import useCompanyStore from '../StateHolder/StoreCompany'
import { useNavigate } from 'react-router-dom'
import ExposeImage from '../constant/CompanyLogo'

export default function CompanyUpdateForm({data,toggleShow}) {

    const setcompany  = useCompanyStore((state)=> state.setCompany)


    const [isImageset, setisImageset] = useState(false)

    const imageRef = useRef()

    const route = useNavigate()

    const location = [
        'Greater Accra Region - Accra',
        'Ashanti Region - Kumasi',
        'Central Region - Cape Coast',
        'Western Region - Sekondi-Takoradi',
        'Eastern Region - Koforidua',
        'Northern Region - Tamale',
        'Upper East Region - Bolgatanga',
        'Upper West Region - Wa',
        'Volta Region - Ho',
        'Bono Region - Sunyani',
        'Bono East Region - Techiman',
        'Ahafo Region - Goaso',
        'Savannah Region - Damongo',
        'North East Region - Nalerigu',
        'Oti Region - Dambai',
        'Western North Region - Sefwi Wiawso',

    ]

    const handleClick = (e)=>{
        e.preventDefault()
        imageRef.current.click()
    }

    const handleImageSelect = (e)=>{
        setdata({..._data,logo:e.target.files[0]})
        setisImageset(true)
    }

    const [_data,setdata] = useState({
        name:'',
        email:'',
        location:'',
        phone:'',
        logo:'',
        description:'',
    })


    const handleSubmit = async(e)=>{
        e.preventDefault()

        const formData = new FormData()


        formData.append('name',_data.name)
        formData.append('email',_data.email)
        formData.append('location',_data.location)
        formData.append('phone',_data.phone)
        formData.append('logo',_data.logo)
        formData.append('description',_data.description)

        console.log([...formData.entries()]);





        await axiosClient.post(`/companies/${data.id}/update`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }

            )
        .then(({data})=>{
            toast.success(data.message);
            setcompany(data.company)
            toggleShow()
            route('/dashboard')
            console.log(data);

        })
        .catch(err=>{
            console.log(err);

            const response = err.response

            if(response && response === 422){
                console.log(response.data.error);
                toast.error(response.data.message)
            }
            toast.error(response.data.message)

        })

    }





    const logoSrc = _data.logo instanceof Blob ? URL.createObjectURL(_data.logo) : _data.logo;


    useEffect(()=>{
        setdata({
            name:data.name,
            email:data.email,
            location:data.location,
            phone:data.phone,
            logo:data.logo,
            description:data.description,
        })

    },[])

  return (
    <form className=' p-6 bg-gray-50  my-5 rounded-2xl overflow-hidden ease-in-out duration-500 transition-all' onSubmit={handleSubmit}>
        <div className='mb-10 flex gap-5 items-center justify-center flex-col'>
            {
                !isImageset?
                <Avatar
                    sx={{width:'100px',height:'100px'}}
                    src={ExposeImage({image:data.logo})}
                />:
                <Avatar
                    sx={{width:'100px',height:'100px'}}
                    src={logoSrc}
                />
            }
            <div className='space-x-2'>
                <button type='button' onClick={handleClick} className='text-sm p-2 bg-green-200 rounded-md font-montserrat font-medium'>
                    <FontAwesomeIcon icon={faImage} className='mr-2 text-blue-800'/>
                    Add Logo</button>
                <button type='button' onClick={()=>{setdata({..._data,logo:'none'}); setisImageset(true)}} className='text-sm p-2 bg-red-200 rounded-md font-montserrat font-medium'>
                    <FontAwesomeIcon icon={faTrash} className='mr-2 text-red-800'/>
                    Delete Logo</button>
            </div>

            <input type="file" encType='multipart/form-data'  accept="image/*" ref={imageRef} className='hidden' onChange={handleImageSelect}/>

        </div>


        <TextField
            fullWidth
            label='Company Name*'
            sx={{mb:3}}
            value={_data.name}
            autoFocus
            onChange={(e)=>setdata({..._data,name:e.target.value})}
        />
        <TextField
            fullWidth
            label='Company Email*'
            sx={{mb:3}}
            value={_data.email}
            onChange={(e)=>setdata({..._data,email:e.target.value})}
            autoFocus
            disabled
        />

        <div>
            <InputLabel>Location</InputLabel>
            <Select sx={{mb:3}} value={_data.location} fullWidth onChange={(e)=>setdata({..._data,location:e.target.value})}>
                {
                    location.map((place,index)=>(
                        <MenuItem key={index} value={place}>{place}</MenuItem>
                    ))
                }
            </Select>

        </div>
        <TextField
            fullWidth
            label='Phone Number*'
            sx={{mb:3}}
            value={_data.phone}
            onChange={(e)=>setdata({..._data,phone:e.target.value})}
        />
        <TextField
            fullWidth
            label='Company About*'
            multiline
            rows={4}
            sx={{mb:3}}
            value={_data.description}
            onChange={(e)=>setdata({..._data,description:e.target.value})}
        />
        <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{py:2,mt:2}}
            className='col-span-2'
        >UPDATE</Button>
    </form>
  )
}
