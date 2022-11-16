import { Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { Types } from "mongoose";
import { Auth } from "src/auth/auth.decorators";
import { IdValidationPipe } from "src/pipes/id.validation.pipe";
import { CurrentUser } from "src/user/decorators/user.decorator";
import { LogLikesService } from "./log-likes.service";

@Controller('log-likes')
export class LogLikesController{
    constructor(private readonly logLikesService: LogLikesService){}

    @Get('check-exists/:postId')
    @Auth()
    async checkExists(
        @Param('postId',IdValidationPipe) postId:Types.ObjectId,
        @CurrentUser('_id') userId: Types.ObjectId
    ){
        return this.logLikesService.checkExists(userId,postId);
    }

    @Get('get-count/:postId')
    async getAllCount(@Param('postId',IdValidationPipe) postId:Types.ObjectId){
        return this.logLikesService.getAllCount(postId);
    }

    @HttpCode(200)
    @Put(':postId')
    @Auth()
    async toggleLog(
        @Param('postId',IdValidationPipe) postId:Types.ObjectId,
        @CurrentUser('_id') userId:Types.ObjectId
    ){
        return this.logLikesService.toggle(userId,postId)
    }

   
}