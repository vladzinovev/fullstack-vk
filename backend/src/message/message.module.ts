import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { ConversationModel } from "src/conversation/conversation.model";
import { MessageController } from "./message.controller";
import { MessageModel } from "./message.model";
import { MessageService } from "./message.service";

@Module({
    controllers:[MessageController],
    providers:[MessageService],
    imports:[
        TypegooseModule.forFeature([
          {
            typegooseClass:MessageModel,
            schemaOptions:{
              collection:"Message",
            }
          }
        ]),
        TypegooseModule.forFeature([
            {
              typegooseClass:ConversationModel,
              schemaOptions:{
                collection:"Conversation",
              }
            }
        ]),
    ]
})
export class MessageModule{}