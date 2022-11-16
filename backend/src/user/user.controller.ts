import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, Put } from '@nestjs/common';
import { isConstructor } from '@typegoose/typegoose/lib/internal/utils';
import { Types} from 'mongoose';
import { Auth } from 'src/auth/auth.decorators';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { CurrentUser } from './decorators/user.decorator';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser('_id') _id:Types.ObjectId){
    return this.userService.getUser(_id);
  }

  @Get('by-id/:id')
  async getUser(@Param('id',IdValidationPipe) id:string){
    return this.userService.getUser(new Types.ObjectId(id));
  }

  @Get('find/:searchTerm')
  async findUser(@Param('searchTerm',IdValidationPipe) searchTerm:string){
    return this.userService.findUser(searchTerm);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('profile')
  @Auth()
  async updateProfile(@CurrentUser('_id') _id:Types.ObjectId, @Body() dto:UserDto){
    return this.userService.updateProfile(_id,dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth() //Admin
  async updateUser(@Param('id', IdValidationPipe) id:Types.ObjectId, @Body() dto: UserDto){
    return this.userService.updateProfile(id,dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch(':frinedId')
  @Auth()
  async toggleFriend(@CurrentUser('_id') currentUserId:Types.ObjectId,
    @Param('friendId', IdValidationPipe) friendId:Types.ObjectId){
    return this.userService.toggleFriend(currentUserId,friendId)
  }
}