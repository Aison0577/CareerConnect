import React, { useState } from 'react'
import Title from '../../typo/Title'
import Subs from '../../typo/Subs'
import { Link } from 'react-router-dom'
import RegisterIndividual from '../../components/forms/RegisterIndividual'
import RegisterCompany from '../../components/forms/RegisterCompany'
import Header from '../../components/Navs/Header'

export default function SignUp() {

  const [togglePage, settogglePage] = useState(false)
  return (
    <div className='w-full'>
      {/* <Header/> */}

    <div className='flex items-center justify-center flex-col  py-4'>
      <div className='p-[4px] bg-gray-200 rounded-xl'>
        <button onClick={()=> settogglePage(!togglePage)} className={`${!togglePage?'bg-primary text-white':'bg-transparent text-primary'} rounded-xl px-7 py-3`}>Individual</button>
        <button onClick={()=> settogglePage(!togglePage)} className={`${togglePage?'bg-primary text-white':'bg-transparent text-primary'} px-7 py-3 rounded-xl`}>Company</button>
      </div>
    </div>


      <div className='w-full'>

        {
          !togglePage?
          <RegisterIndividual/>:
          <RegisterCompany/>
        }
      </div>

























{/*




      <div>
        <Title
          text={'Sign Up'}
        />

        <Link to={'/signin'}>
          <Subs text={'Already have an account? Sign In'} otherStyles={'text-center my-4'}/>
        </Link>

      </div> */}

    </div>
  )
}
