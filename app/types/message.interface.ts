import { IUser } from "./user.interface"

export interface IMessage{
    _id:string
    text:string
    userFrom:IUser
    userTo:IUser
}

export interface IMessageFields{
    text:string
    userToId:string
    conversationId:string
}

export interface IConversation{
    _id:string
    messages:IMessage[]
}