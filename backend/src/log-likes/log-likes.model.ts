import { prop, Ref } from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import { PostModel } from 'src/post/post.model';
import { EnumGender } from 'src/user/user.interface';
import { UserModel } from 'src/user/user.model';

export interface LogLikesModel extends Base{}

export class LogLikesModel extends TimeStamps{

    @prop({ref:()=>PostModel})
    post:Ref<PostModel>

    @prop({ref:()=>UserModel})
    user:Ref<UserModel>

}
