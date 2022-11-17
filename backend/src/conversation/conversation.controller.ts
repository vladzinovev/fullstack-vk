import { Body, Controller, Delete, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Types } from "mongoose";
import { Auth } from "src/auth/auth.decorators";
import { MessageDto } from "src/message/message.dto";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { CurrentUser } from "src/user/decorators/user.decorator";
import { ConversationService } from "./conversation.service";

@Controller('conversation')
export class ConversationController{
    constructor(private readonly conversationService: ConversationService){}

    @Get('/:id')
    @Auth()
    async getById(@Param('id',IdValidationPipe) id:Types.ObjectId
    ){
        return this.conversationService.byId(id);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post()
    @Auth()
    async createConversation(){
        return this.conversationService.create()
    }
}