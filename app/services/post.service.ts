
import { IPost, IPostField } from "@/types/posts.interface"
import { axiosAuth, axiosClassic } from "api/interceptors"

//переписываем с БД
export const PostService={
    async getAll(){
        return axiosClassic.get<IPost[]>(`/post`)
    },

    async getByUserId(userId:string){
        return axiosClassic.get<IPost[]>(`/post/by-userId/${userId}`)
    },

    async create(body:IPostField){
        return axiosAuth.post(`/post`,body)
    },

    async delete(postId:string){
        return axiosAuth.delete(`/post/${postId}`)
    },

}