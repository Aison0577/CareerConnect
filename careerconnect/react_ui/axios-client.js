import axios from "axios";
import toast from "react-hot-toast";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})


axiosClient.interceptors.request.use((config)=>{

    const token = localStorage.getItem('User_token')
    config.headers.Authorization = `Bearer ${token}`

    return config
})


axiosClient.interceptors.response.use((response)=>{
    return response
},
(error)=>{

    try {
        const { response } = error;
        if(response.status === 401){
            localStorage.removeItem('User_token')
        }

    } catch (error) {
        toast.error(error)
    }

    throw error;
})


export default axiosClient;
