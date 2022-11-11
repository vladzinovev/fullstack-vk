import { prop } from "@typegoose/typegoose"
import { IsEmail, IsEnum, IsString } from "class-validator"
import { EnumGender } from "./user.interface"

export class UserDto {

    @IsString()
    name:string

    @IsString()
    birthDate:string

    @IsString()
    city:string
    
    @IsEnum(EnumGender)
    gender:string

    @IsString()
    avatarPath:string
}

