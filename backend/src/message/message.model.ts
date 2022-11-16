import { prop, Ref } from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import { EnumGender } from 'src/user/user.interface';
import { UserModel } from 'src/user/user.model';

export interface MessageModel extends Base{}

export class MessageModel extends TimeStamps{

    @prop()
    text:string

    @prop({ref:()=>UserModel})
    userFrom:Ref<UserModel>

    @prop({ref:()=>UserModel})
    userTo:Ref<UserModel>

}
