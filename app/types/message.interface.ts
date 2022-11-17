import { IUser } from "./user.interface"

export interface IMessage{
    id:string
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
    id:string
    messages:IMessage[]
}