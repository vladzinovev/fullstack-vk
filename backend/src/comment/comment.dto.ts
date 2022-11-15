import { prop } from "@typegoose/typegoose"
import { IsEmail, IsEnum, IsString } from "class-validator"
import { IsObjectId } from "class-validator-mongo-object-id"


export class CommentDto {

    @IsString()
    message:string

    @IsObjectId()
    postId:string
}

