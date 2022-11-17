
import { IMessageFields } from "@/types/message.interface"
import { axiosAuth, axiosClassic } from "api/interceptors"

//переписываем с БД
export const MessageService={

    async create(body:IMessageFields){
        return axiosAuth.post(`/message`)
    },

    async delete(messageId:string,conversationId:string){
        return axiosAuth.delete(`/message/${messageId}`,{
            params:{
                conversationId
            }
        })
    },

}