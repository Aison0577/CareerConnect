import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CompanySignIn from '../pages/CompanySignIn'
import LandingPage from '../pages/LandingPage'
import { useCompanyStateContext } from '../contexts/CompanyContextProvider'
import Dashboard from '../pages/Dashboard'
import CompanyRegister from '../pages/CompanyRegister'
import SeekerRegister from '../pages/SeekerRegister'
import SeekerDashboard from '../pages/SeekerDashPages/SeekerDashboard'
import ViewJobDetails from '../pages/SeekerDashPages/ViewJobDetails'
import ApplicationPage from '../pages/SeekerDashPages/ApplicationPage'

export default function UserRoutes() {

    const {company, token } = useCompanyStateContext()


    const RequireAuthCompany = ({children})=>{
        return token ? children : <Navigate to={'/docs'}/>
    }
    const RequireAuthSeeker = ({children})=>{
        return token ? children : <Navigate to={'/docs'}/>
    }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome/>} />
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SeekerRegister/>}/>
          <Route path='/docs' element={<LandingPage/>}/>
          <Route path='/compsignin' element={<CompanySignIn/>}/>
          <Route path='/compsignup' element={<CompanyRegister/>}/>


          {/* Protected Routes */}

          <Route path='/dashboard'
            element={
                // <RequireAuth>
                    <Dashboard/>
                // </RequireAuth>
            }


          />

          <Route path='/seekerdash' element={<SeekerDashboard/>} />
          <Route path='/job/:id' element={<ViewJobDetails/>} />
          <Route path='/apply/:name/:id' element={<ApplicationPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
