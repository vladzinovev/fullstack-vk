import { FC } from "react"
import { useAuth } from "../../../hooks/useAuth"

const Auth:FC=()=>{
    
    const {user} = useAuth()
    
    return(
        <div>Auth</div>
    )
}
export default Auth;