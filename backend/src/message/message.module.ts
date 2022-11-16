import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
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
    ]
})
export class MessageModule{}