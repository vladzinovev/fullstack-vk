import { prop } from "@typegoose/typegoose"
import { IsEmail, IsEnum, IsString } from "class-validator"
import { IsObjectId } from "class-validator-mongo-object-id"
import { EnumGender } from "src/user/user.interface"


export class LogLikesDto {

    @IsObjectId()
    postId:string

    
}

