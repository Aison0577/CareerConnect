import React, { createContext, useContext, useState } from 'react'
import useCompanyStore from '../StateHolder/StoreCompany'



const CompanyStateContext = createContext({
    currentUser: null,
    token:null,
    isLoading: false,
    setToken:()=>{},
    setisLoading:()=>{},
    setcurrentPage:()=>{},

})

export default function CompanyContextProvider({children}) {

    const _company = useCompanyStore((state)=> state.company)


    const [isLoading,setisLoading] = useState(false)
    const [token,_settoken] = useState(1234)
    const company = _company

    const setToken = (token) =>{
        _settoken(token)

        if(token){
            sessionStorage.setItem('company_token', token)
        }else{
            sessionStorage.removeItem('company_token')
        }
    }


  return (
    <CompanyStateContext.Provider value={{
        company,
        token,
        setToken,
        isLoading,
        setisLoading,
    }}>
        {children}
    </CompanyStateContext.Provider>
  )
}

export const useCompanyStateContext = () => useContext(CompanyStateContext)
