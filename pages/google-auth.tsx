import { AuthService } from "@/services/auth/auth.service";
import { NextPage } from "next"
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Card, notification, Spin } from "antd";
import { errorCatch } from "api/api.utils";

const GoogleAuthPage:NextPage=()=>{
    const {query}=useRouter();
    const code = String(query?.code)
    const {mutate}=useMutation(
        'send code token',
        ()=>AuthService.LoginGoogle(code),
        {
            onSuccess(){
                notification.success({
                    message:'Auth success'
                })
            },
            onError(error){
                notification.error({
                    message:errorCatch(error)
                })
            }
            
        }
    )

    useEffect(()=>{
        if(code) mutate()
    },[code, mutate])

    return(
        <div className="center-block">
            <Spin size='large'/>
        </div>
    )
}
export default GoogleAuthPage;