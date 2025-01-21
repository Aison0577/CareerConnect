import React from 'react'
import { Toaster } from 'react-hot-toast'
import UserRoutes from './components/Routes/UserRoutes'
import CompanyContextProvider, { useCompanyStateContext } from './contexts/CompanyContextProvider'
import SeekerContextProvider, { useSeekerStateContext } from './contexts/SeekerContextProvider'

function App() {



  return (
    <div className='bg-blue-200/35'>
        <CompanyContextProvider>
            <SeekerContextProvider>
                <UserRoutes/>
            </SeekerContextProvider>
        </CompanyContextProvider>
        <Toaster position='top-center'/>
    </div>
  )
}

export default App
