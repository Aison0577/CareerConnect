import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import SeekerHeader from '../../components/SeekerHeader'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faUpload } from '@fortawesome/free-solid-svg-icons'
import { Button, TextField } from '@mui/material'

export default function ApplicationPage() {

    const {id,name} = useParams()
    const cvRef = useRef()

    const [data,setdata] = useState({
        'seeker_id':'',
        'cv':'',
        'job_id':id,
        'fullaname':'',
        'YOE':0,
        'number':'',
        'email':'',
        'link':'',
        'letter':'',
        'pay':'',
    })

    const handleClick = (e)=>{
        e.preventDefault()
        cvRef.current.click()
    }

    const handleChange = (e)=>{
        setdata({...data,cv:e.target.files[0]})
        console.log(data.cv);
    }


    const handleSubmit = (e)=>{
        e.preventDefault()


        console.log(data.cv.File.name);

    }
    useEffect(()=>{

    },[data])



  return (
    <div className='h-screen'>
        {/* <SeekerHeader/> */}
        <div className='flex flex-col'>
            {/* {id} */}

            <Title
                text={'Complete the Form To Apply'}
                otherStyles={'text-primary text-left'}
            />

            <Subs
                text={'Provide your CV and Make Sure your email is valid to recieve feedbacks from campanies'}
                otherStyles={'text-gray-500 text-left mb-9'}
            />



            <form onSubmit={handleSubmit} className='adjust text-primary bg-gray-50 rounded-xl p-5 grid grid-cols-2 gap-4'>

                <div className='w-full mb-5 col-span-2'>
                    <button className='border-dashed border-2 p-3 border-slate-600 rounded-md w-full' onClick={handleClick}>
                        {
                            data.cv === ''?
                            <div>
                                <FontAwesomeIcon icon={faUpload} className='size-5 bg-green-200 p-2 rounded-xl'/>
                                <Subs
                                    text={'Upload your CV'}
                                    otherStyles={'text-center'}
                                />
                            </div>
                            :
                            <div>
                                <Subs
                                    text={'CV Uploaded'}
                                />
                                <h1>
                                    {/* {cv.name} */}
                                </h1>
                            </div>
                        }
                    </button>
                    <input type="file" ref={cvRef} onChange={handleChange} className='hidden' />
                </div>

                <TextField
                    fullWidth
                    label={'Full Name'}
                    className='col-span-2'
                    value={data.fullaname}
                    onChange={(e)=>setdata({...data,fullaname:e.target.value})}
                />
                <TextField
                    fullWidth
                    label={'Years of Experience'}
                    className=''
                    type='number'
                    value={data.YOE}
                    onChange={(e)=>setdata({...data,YOE:e.target.value})}
                />
                <TextField
                    fullWidth
                    label={'Phone Number'}
                    className=''
                    value={data.number}
                    onChange={(e)=>setdata({...data,number:e.target.value})}
                />
                <TextField
                    fullWidth
                    label={'Email Address'}
                    className=''
                    value={data.email}
                    onChange={(e)=>setdata({...data,email:e.target.value})}
                />
                <TextField
                    fullWidth
                    label={'Desired Rate per month (USD)'}
                    className=''
                    value={data.pay}
                    onChange={(e)=>setdata({...data,pay:e.target.value})}
                />
                <TextField
                    fullWidth
                    label={'Online Resume or Portfolio Website - (Optional)'}
                    placeholder={'Online Resume or Portfolio Website'}
                    className='col-span-2'
                    type='link'
                    value={data.link}
                    onChange={(e)=>setdata({...data,link:e.target.value})}

                />
                <TextField
                    fullWidth
                    label={'Why should we give you the job'}
                    multiline
                    rows={5}
                    sx={
                        {
                            mb:3,
                        }
                    }
                    className='col-span-2'
                    value={data.letter}
                    onChange={(e)=>setdata({...data,letter:e.target.value})}
                />

                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    fullWidth
                    sx={{py:2,mt:2,mb:3}}
                    className='col-span-2'
                >
                    Apply
                </Button>
            </form>
        </div>
    </div>
  )
}
