import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCompanyStore = create(
    persist(
        (set)=>({
            company:{},

            setCompany:(user)=>
                set((state)=>({
                    company: user
                })),
            removeCompany:()=>
                set((state)=>({
                    company:{}
                }))

        }),{
            name:'company-store',
            getStorage:()=>sessionStorage,
        }
    )
)


export default useCompanyStore;
