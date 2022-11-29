import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { Types } from "mongoose";
import { Auth } from "src/auth/auth.decorators";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { CurrentUser} from "src/user/decorators/user.decorator";
import { MessageDto } from "./message.dto";
import { MessageService } from "./message.service";

@Controller('message')
export class MessageController{
    constructor(private readonly messageService: MessageService){}

   /*  @Get('conversation/:userToId')
    @Auth()
    async getByUserId(@Param('userToId',IdValidationPipe) userToId:Types.ObjectId,
        @CurrentUser('_id') userFromId:Types.ObjectId
    ){
        return this.messageService.byUserToId(userFromId,userToId);
    } */

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post()
    @Auth()
    async createMessage(
        @CurrentUser('_id') userId:Types.ObjectId,
        @Body() dto:MessageDto
    ){
        return this.messageService.create(userId,dto)
    }
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Delete(':id')
    @Auth()
    async deleteMessage(
        @Param('id',IdValidationPipe) id:Types.ObjectId,
        @Query('conversationId') conversationId:string
    ){
        return this.messageService.delete(id,conversationId)
    }
}