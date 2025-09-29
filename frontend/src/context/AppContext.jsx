import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();

    const [token, setToken] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");


    const fetchBlogs = async()=>{
        try {
            const {data} =  await axios.get('/api/blog/all')

            data.success ?  setBlogs(data.blogs)  : 
        } catch (error) {
            
        }
    }

    const value = {
        axios,
        navigate,
        token,
        setToken,
        blogs,
        setBlogs,
        input,
        setInput
    };



    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};