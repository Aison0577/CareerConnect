import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSeekerStore = create(
    persist(
        (set)=>({
            seeker:{},

            setUser:(user)=>
                set((state)=>({
                    seeker: user
                })),
            removeuser:()=>
                set((state)=>({
                    seeker:{}
                }))

        }),{
            name:'seeker-store',
            getStorage:()=>sessionStorage,
        }
    )
)


export default useSeekerStore;
