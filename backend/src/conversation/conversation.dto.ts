import { prop } from "@typegoose/typegoose"
import { IsEmail, IsEnum, IsString } from "class-validator"
import { IsObjectId } from "class-validator-mongo-object-id"


export class ConversationDto {

    @IsObjectId()
    withUserId:string
    
}

