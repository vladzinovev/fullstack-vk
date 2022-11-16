import { prop, Ref } from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import { PostModel } from 'src/post/post.model';
import { EnumGender } from 'src/user/user.interface';
import { UserModel } from 'src/user/user.model';

export interface CommentModel extends Base{}

export class CommentModel extends TimeStamps{

    @prop({ref:()=>UserModel})
    user:Ref<UserModel>

    @prop({ref:()=>PostModel})
    post:Ref<PostModel>

    @prop()
    message:string

}
