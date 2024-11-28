import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import Main from '../typo/Main'
import { useNavigate } from 'react-router-dom';



function Welcome() {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/docs');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);
    
  return (
    <div className='flex h-screen w-full items-center justify-center bg-primary text-white'>
        <div className='flex flex-col items-center justify-center'>
            <Main 
                text={'CareerConnect'}
                otherStyles={'mb-4'}
            />
            <Loading/>
        </div>
    </div>
  )
}

export default Welcome
