import { Injectable, NotFoundException } from "@nestjs/common";
import { Types } from "mongoose";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "typegoose";
import { PostDto } from "./post.dto";
import { PostModel } from "./post.model";

@Injectable()
export class PostService{
    constructor(
        @InjectModel(PostModel) 
        private readonly PostModel:ModelType<PostModel>
    ) {}

    async getAll(){
        return this.PostModel.find()
        .select('-_v')
        .populate('user', 'avatarPath name isVerified')
        .sort({createdAt:'desc'})
        .exec()
    }

    async byUserId( userId:Types.ObjectId){
        return this.PostModel.find({user:userId})
        .select('-_v')
        .populate('user', 'avatarPath name isVerified')
        .sort({createdAt:'desc'})
        .exec()
    }

    async create(userId:Types.ObjectId, {image,content}:PostDto){
        return this.PostModel.create({image,content,user:userId})
    }

    async delete(id:Types.ObjectId){
        const deletePost=await this.PostModel.findByIdAndDelete(id).exec()
        if(!deletePost) throw new NotFoundException('Пост не найден')
        return deletePost
    }
}