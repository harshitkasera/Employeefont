
import { createContext, useState, useEffect, useContext } from "react";

const AuthContaxt = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoggedIn , setIsLoggedIn] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token )
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
        <AuthContaxt.Provider value = {{isLoggedIn,login,logOut}}>
            {children}
        </AuthContaxt.Provider>
    )
}

export const useAuth = () => useContext(AuthContaxt)







