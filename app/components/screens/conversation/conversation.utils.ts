import { IMessage } from "@/types/message.interface"

export const isCurrentUserMessage=(item:IMessage, userToId?:string)=>{
    return userToId !==item.userTo._id && userToId===item.userFrom._id
}