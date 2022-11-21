
import { MediaService } from "@/services/media.service";
import { notification } from "antd";
import { errorCatch } from "api/api.utils";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {useMutation} from 'react-query'

export const useUploadFile=(onChange:(...event:any)=>void, folder?:string)=>{
    const {mutateAsync} = useMutation('upload file',(data:FormData)=>MediaService.upload(data,folder),{
        onSuccess:({data})=>{
            onChange(data)
        },
        onError:(error:any)=>{
            notification.error({
                message: errorCatch(error)
            })
        }
    })

    const uploadFile=async(e:ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files;
        if(!files?.length) return
        const formData=new FormData()
        formData.append('media',files[0])
        await mutateAsync(formData)
    }
    return{
        uploadFile
    }
}