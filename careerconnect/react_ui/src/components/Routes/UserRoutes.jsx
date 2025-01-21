import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Welcome from '../../pages/Welcome'
import SignIn from '../../pages/AuthPages/SignIn'
import SignUp from '../../pages/AuthPages/SignUp'
import CompanySignIn from '../../pages/AuthPages/CompanySignIn'
import LandingPage from '../../pages/LandingPage'
import { useCompanyStateContext } from '../../contexts/CompanyContextProvider'
import Dashboard from '../../pages/CompanyDashPages/Dashboard'
import CompanyRegister from '../../pages/AuthPages/CompanyRegister'
import SeekerRegister from '../../pages/AuthPages/SeekerRegister'
import SeekerDashboard from '../../pages/SeekerDashPages/SeekerDashboard'
import ViewJobDetails from '../../pages/SeekerDashPages/ViewJobDetails'
import ApplicationPage from '../../pages/SeekerDashPages/ApplicationPage'
import Profile from '../../pages/CompanyDashPages/Profile'
import NewJobPost from '../../pages/CompanyDashPages/NewJobPost'
import ManageJobs from '../../pages/CompanyDashPages/ManageJobs'
import ManageApplicants from '../../pages/CompanyDashPages/ManageApplicants'
import Settings from '../../pages/CompanyDashPages/Settings'
import PostedJobs from '../../pages/SeekerDashPages/PostedJobs'
import StarredJobs from '../../pages/SeekerDashPages/StarredJobs'
import SeekerProfile from '../../pages/SeekerDashPages/SeekerProfile'

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



          <Route path='/dashboard' element={<Dashboard/>}>
                <Route path='profile' element={<Profile/>}/>
                <Route path='addjob' element={<NewJobPost/>}/>
                <Route path='managejobs' element={<ManageJobs/>}/>
                <Route path='applicants' element={<ManageApplicants/>}/>
                <Route path='settings' element={<Settings/>}/>
          </Route>



          <Route path='/seekerdash' element={<SeekerDashboard/>}>
            <Route path='jobs' element={<PostedJobs/>}/>
            <Route path='favjobs' element={<StarredJobs/>}/>
            <Route path='profile' element={<SeekerProfile/>}/>
          </Route>


          <Route path='/job/:id' element={<ViewJobDetails/>} />
          <Route path='/apply/:name/:id' element={<ApplicationPage/>} />


        </Routes>
      </BrowserRouter>
    </>
  )
}
