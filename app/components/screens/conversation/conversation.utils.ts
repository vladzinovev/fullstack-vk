import { IMessage } from "@/types/message.interface"

export const isCurrentUserMessage=(item:IMessage, userToId?:string)=>{
    return userToId !==item.userFrom._id
}