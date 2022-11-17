import { prop } from "@typegoose/typegoose"
import { IsEmail, IsEnum, IsObject, IsString } from "class-validator"
import { EnumGender } from "src/user/user.interface"


export class MessageDto {

    @IsString()
    text:string

    @IsString()
    userFromId:string

    @IsString()
    userToId:string

    @IsObject()
    conversationId:string
}

