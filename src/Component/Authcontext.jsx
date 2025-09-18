
import { createContext, useState, useEffect, useContext } from "react";

const AuthContaxt = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token )
        setLoading(false)
    },[])

    // login Function 

    const login = (token) =>{
        setIsLoggedIn(true)
        localStorage.setItem('token',token)
    }

    // logout function
    const logOut = (token) =>{
        setIsLoggedIn(false)
        localStorage.removeItem('token', token)
    }

    return(
        <AuthContaxt.Provider value = {{isLoggedIn,login,logOut, loading}}>
            {children}
        </AuthContaxt.Provider>
    )
}

export const useAuth = () => useContext(AuthContaxt)







