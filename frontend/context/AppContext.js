const { createContext, useContext, useState } = require("react");
const axios = require('axios')
const {useNavigate} = require('react-router-dom')


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL 




const  AppContext = createContext()

export const AppProvider =({children})=>{


    const navigate = useNavigate()

    const [token ,setToken] = useState(null)
    const [blogs ,setBlogs] = useState([])
    const [input ,setInput] = useState("")

    const value = {

         axios , navigate , token , setToken , blogs, setBlogs , input , setInput
    }
    return  <AppContext.prototype value={value}>
        {children}
    </AppContext.prototype>
}


export const useAppContext = ()=>{

    return  useContext(AppContext)
}