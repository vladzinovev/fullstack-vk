import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { TypeUser } from "../services/auth/auth.helper";
import { useRouter } from "next/router";
import { AuthService } from "@/services/auth/auth.service";

interface IContext{
    user: TypeUser
    setUser:Dispatch<SetStateAction<TypeUser>>| null
}

export const AuthContext=createContext<IContext>({} as IContext)

const AuthProvider:FC<PropsWithChildren<unknown>>=({children})=>{
    const [user, setUser] = useState<TypeUser>(null)

    //следим за изменением старницы
    const {pathname} = useRouter()

    useEffect(()=>{
        const accessToken = Cookies.get('accessToken')
        if(accessToken){
            const user = JSON.parse(localStorage.getItem('user')||'')

            setUser(user)
        }
    },[])

    useEffect(()=>{
        const accessToken = Cookies.get('accessToken')
        if(accessToken && !user){
            AuthService.logout()
            setUser(null)
        }
    },[pathname])

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;