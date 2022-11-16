import { Injectable, NotFoundException } from "@nestjs/common";
import { MessageModel } from "./message.model";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { Types } from "mongoose";
import { MessageDto } from "./message.dto";

@Injectable()
export class MessageService{
    constructor(
        @InjectModel(MessageModel) 
        private readonly MessageModel:ModelType<MessageModel>
    ) {}

    async byUserFromId( userFromId:Types.ObjectId){
        return this.MessageModel.find({userFrom:userFromId})
        .populate('userFrom', 'avatarPath name')
        .populate('userTo', 'avatarPath name')
        .exec()
    }

    async byUserToId( userFromId:Types.ObjectId,userToId:Types.ObjectId){
        return this.MessageModel.find({userFrom:userFromId,userTo:userToId})
        .populate('userFrom', 'avatarPath')
        .populate('userTo', 'avatarPath')
        .exec()
    }

    async create(userFromId:Types.ObjectId, {userToId, text}:MessageDto){
        return this.MessageModel.create({userFrom:userFromId, userTo:userToId, text})
    }

    async delete(id:Types.ObjectId){
        const deleteMessage=await this.MessageModel.findByIdAndDelete(id).exec()
        if(!deleteMessage) throw new NotFoundException('Сообщение не найдено')
        return deleteMessage
    }
}