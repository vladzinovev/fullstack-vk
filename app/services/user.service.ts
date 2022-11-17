import { IUser } from "@/types/user.interface"
import { axiosAuth, axiosClassic } from "api/interceptors"

//переписываем с БД
export const UserService={
    async FindUsers(searchTerm:string){
        return axiosClassic.get<IUser[]>(`/user/find/${searchTerm}`)
    },

    async getUser(userId:string){
        return axiosClassic.get<IUser>(`/user/by-id/${userId}`)
    },

    async getProfile(){
        return axiosAuth.get<IUser>(`/user/profile`)
    },

    async updateProfile(){
        return axiosAuth.put<IUser>(`/user/profile`)
    },

    async togglefriend(friendId:string){
        return axiosClassic.patch<boolean>(`/user/${friendId}`)
    },

}