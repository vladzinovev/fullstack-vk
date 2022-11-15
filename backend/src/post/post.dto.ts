import { prop } from "@typegoose/typegoose"
import { IsEmail, IsEnum, IsString } from "class-validator"
import { EnumGender } from "src/user/user.interface"


export class PostDto {

    @IsString()
    content:string

    @IsString()
    image?:string

}

