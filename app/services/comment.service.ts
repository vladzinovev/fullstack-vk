
import { axiosAuth, axiosClassic } from "api/interceptors"

//переписываем с БД
export const CommentService={
    async getAll(){
        return axiosClassic.get<IPost[]>(`/post`)
    },

    async getByUserId(userId:string){
        return axiosClassic.get<IPost[]>(`/post/by-userId/${userId}`)
    },

    async create(){
        return axiosAuth.post(`/post`)
    },

    async delete(postId:string){
        return axiosAuth.delete(`/post/${postId}`)
    },

}