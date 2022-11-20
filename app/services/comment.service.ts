
import { IComment } from "@/types/comment.interface"
import { axiosAuth, axiosClassic } from "api/interceptors"

//переписываем с БД
export const CommentService={
    async getByPostId(postId:string){
        return axiosClassic.get<IComment[]>(`/comment/by-post/${postId}`)
    },

    async create(body:IComment){
        return axiosAuth.post<IComment>(`/comment`, body)
    },

}