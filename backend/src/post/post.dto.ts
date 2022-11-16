import { prop } from "@typegoose/typegoose"
import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator"
import { EnumGender } from "src/user/user.interface"


export class PostDto {

    @IsString()
    content:string
    
    @IsOptional()
    @IsString()
    image?:string

}

