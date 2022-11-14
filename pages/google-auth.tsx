import { AuthService } from "@/services/auth/auth.service";
import { NextPage } from "next"
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Card, notification, Spin } from "antd";
import { errorCatch } from "api/api.utils";
import { useAuth } from "@/hooks/useAuth";

const GoogleAuthPage:NextPage=()=>{
    const {setUser}=useAuth();
    const {query,push}=useRouter();
    const code = query?.code
    const {mutate}=useMutation(
        'send code token',
        (code:string)=>AuthService.LoginGoogle(code),
        {
            async onSuccess(user){
                notification.success({
                    message:'Auth success'
                })
                setUser && setUser(user)
                await push('/')
            },
            onError(error){
                notification.error({
                    message:errorCatch(error)
                })
            }
            
        }
    )

    useEffect(()=>{
        if(code) mutate(String(code))
    },[code, mutate])

    return(
        <div className="center-block">
            <Spin size='large'/>
        </div>
    )
}
export default GoogleAuthPage;


