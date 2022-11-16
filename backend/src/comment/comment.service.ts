import { Injectable } from "@nestjs/common";
import { Types } from "mongoose";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { CommentDto } from "./comment.dto";
import { CommentModel } from "./comment.model";

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(CommentModel) private readonly CommentModel:ModelType<CommentModel>
    ) {}

    async byPostId(postId:Types.ObjectId, isPrivate =false){

        return this.CommentModel.find({post:postId}, '-_v').sort({createdAt:'desc'}).populate('user','name avatarPath isVerified').exec()
    }

    async create(userId:Types.ObjectId, dto:CommentDto){

        return this.CommentModel.create({message:dto.message, post:dto.postId, user:userId})
    }
}