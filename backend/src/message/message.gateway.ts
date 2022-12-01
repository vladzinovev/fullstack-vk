import {WebSocketGateway,WebSocketServer,SubscribeMessage,MessageBody} from '@nestjs/websockets';
import { Types } from 'mongoose';
import { ConversationService } from 'src/conversation/conversation.service';
import { DeleteMessageDto } from './delete-message.dto';
import { MessageDto } from './message.dto';
import { MessageService } from './message.service';

@WebSocketGateway(80,{cors:true})
export class MessageGateway{
    constructor (
        private readonly messageService: MessageService,
        private readonly conversationService: ConversationService
    ){}
    @WebSocketServer()
    server

    @SubscribeMessage('message:get')
    async getConversation(@MessageBody('conversationId') conversationId:string){
        if(!conversationId) return
        const conversation=await this.conversationService.byId(
            new Types.ObjectId(conversationId)
        )
        this.server(conversationId).emit('conversation',conversation)
    }

    @SubscribeMessage('message:add')
    async addMessage(@MessageBody() dto:MessageDto){
        await this.messageService.create(new Types.ObjectId(dto.userFromId),dto)
        await this.getConversation(dto.conversationId)
    }

    @SubscribeMessage('message:delete')
    async deleteMessage(@MessageBody() dto:DeleteMessageDto){
        await this.messageService.delete(new Types.ObjectId(dto.messageId),dto.conversationId)
        await this.getConversation(dto.conversationId)
    }
}