
import { IsObject, IsString } from "class-validator"

export class DeleteMessageDto {
    @IsString()
    messageId:string

    @IsObject()
    conversationId:string
}

