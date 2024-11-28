import React from 'react'
import { Toaster } from 'react-hot-toast'
import UserRoutes from './components/UserRoutes'
import CompanyContextProvider, { useCompanyStateContext } from './contexts/CompanyContextProvider'
import SeekerContextProvider, { useSeekerStateContext } from './contexts/SeekerContextProvider'
import LoadingPage from './pages/LoadingPage'

function App() {

    // const { isLoading } = useCompanyStateContext();

  return (
    <>
        <CompanyContextProvider>
            <SeekerContextProvider>
                <UserRoutes/>
            </SeekerContextProvider>
        </CompanyContextProvider>
        {/* {
            isLoading?
            <LoadingPage/>:''
        } */}
        <Toaster position='top-center'/>
    </>
  )
}

export default App
