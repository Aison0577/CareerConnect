import React, { createContext, useContext, useState } from 'react'
import useSeekerStore from '../StateHolder/StoreSeeker'



const SeekerStateContext = createContext({
    currentUser: null,
    seeker_token:null,
    isLoading: false,
    setToken:()=>{},
    setisLoading:()=>{},
    setcurrentPage:()=>{},

})

export default function SeekerContextProvider({children}) {

    const _user = useSeekerStore((state)=> state.seeker)

    // console.log(_user);

    const [isLoading,setisLoading] = useState(false)
    const [seeker_token,_settoken] = useState(1234)
    const user = _user

    const setToken = (token) =>{
        _settoken(token)

        if(token){
            sessionStorage.setItem('Seeker_token', token)
        }else{
            sessionStorage.removeItem('Seeker_token')
        }
    }


  return (
    <SeekerStateContext.Provider value={{
        user,
        seeker_token,
        setToken,
        isLoading,
        setisLoading,
    }}>
        {children}
    </SeekerStateContext.Provider>
  )
}

export const useSeekerStateContext = () => useContext(SeekerStateContext)
