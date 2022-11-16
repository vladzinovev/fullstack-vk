import { prop, Ref } from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import { EnumGender } from 'src/user/user.interface';
import { UserModel } from 'src/user/user.model';

export interface PostModel extends Base{}

export class PostModel extends TimeStamps{

    @prop({unique:true})
    content:string

    @prop()
    image?:string

    @prop({ ref:()=>UserModel})
    user:Ref<UserModel>

}
