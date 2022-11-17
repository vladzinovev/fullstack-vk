import { IPost } from "./posts.interface"
import { IUser } from "./user.interface"

export interface IComment{
    id:string
    message:string
    user:IUser
    post:IPost
}

export interface ICommentFields extends Pick<IComment,'message'>{
    postId:string
}