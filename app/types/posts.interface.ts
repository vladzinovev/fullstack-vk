import { IUser } from "./user.interface";

export interface IPost{
    author:IUser
    createdAt:string
    content:string
    images?:string[]
}



