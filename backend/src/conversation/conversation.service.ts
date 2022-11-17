import { Injectable} from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { Types } from "mongoose";
import { ConversationModel } from "./conversation.model";

@Injectable()
export class ConversationService{
    constructor(
        @InjectModel(ConversationModel) 
        private readonly ConversationModel:ModelType<ConversationModel>
    ) {}

    async byId( id:Types.ObjectId){
        return this.ConversationModel.findById(id)
        .populate({path:'messages', populate:['userFrom','userTo']})
        .exec()
    }

    async create(){
        return this.ConversationModel.create({
            messages:[]
        }) 
    }

}