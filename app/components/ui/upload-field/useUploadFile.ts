import { MediaService } from "@/services/MediaService";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {useMutation} from 'react-query'

export const useUploadFile=(onChange:(...event:any)=>void, folder?:string,setValue?:(val:number)=>void, setIsChosen?:Dispatch<SetStateAction<boolean>> )=>{
    const {mutateAsync} = useMutation('upload file',(data:FormData)=>MediaService.upload(data,folder,setValue),{
        onSuccess:({data})=>{
            onChange(data)
        },
        onError:(error:any)=>{
            alert(
                error.response && error.response.data ? 
                typeof error.response.data.message === 'object' ?
                error.response.data.message[0] :
                error.response.data.message :
                error.message
            )
        }
    })

    const uploadFile=async(e:ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files;
        if(!files?.length) return
        setIsChosen && setIsChosen(true)
        const formData=new FormData()
        formData.append('media',files[0])
        await mutateAsync(formData)
    }
    return{
        uploadFile
    }
}