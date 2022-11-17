
import { IConversation } from "@/types/message.interface"
import { IPost } from "@/types/posts.interface"
import { axiosAuth, axiosClassic } from "api/interceptors"

//переписываем с БД
export const ConversationService={
    async get(conversationId:string){
        return axiosClassic.get<IConversation>(`/conversation/${conversationId}`)
    },

    async create(){
        return axiosAuth.post<IConversation>(`/conversation`)
    },

}