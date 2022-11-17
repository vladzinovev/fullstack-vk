import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { ConversationController } from "./conversation.controller";
import { ConversationModel } from "./conversation.model";
import { ConversationService } from "./conversation.service";

@Module({
    controllers:[ConversationController],
    providers:[ConversationService],
    imports:[
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
export class ConversationModule{}