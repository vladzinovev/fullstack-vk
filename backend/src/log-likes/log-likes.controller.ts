import { Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { Types } from "mongoose";
import { Auth } from "src/auth/auth.decorators";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { CurrentUser } from "src/user/decorators/user.decorator";
import { LogLikesService } from "./log-likes.service";

@Controller('comment')
export class LogLikesController{
    LogLikesService: any;
    constructor(private readonly commentService: LogLikesService){}

    @Get('check-exists/:postId')
    @Auth()
    async checkExists(
        @Param('postId',IdValidationPipe) postId:Types.ObjectId,
        @CurrentUser('_id') userId: Types.ObjectId
    ){
        return this.LogLikesService.checkExists(userId,postId);
    }

    @Get('get-count/:postId')
    async getAllCount(@Param('postId',IdValidationPipe) postId:Types.ObjectId){
        return this.LogLikesService.getAllCount(postId);
    }

    @HttpCode(200)
    @Post(':postId')
    @Auth()
    async createLog(
        @Param('postId',IdValidationPipe) postId:Types.ObjectId,
        @CurrentUser('_id') userId:Types.ObjectId
    ){
        return this.LogLikesService.create(userId,postId)
    }

    @HttpCode(200)
    @Delete(':postId')
    @Auth()
    async deleteLog(
        @Param('postId',IdValidationPipe) postId:Types.ObjectId,
        @CurrentUser('_id') userId:Types.ObjectId
    ){
        return this.commentService.create(userId,postId)
    }
}