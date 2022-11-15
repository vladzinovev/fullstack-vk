import { prop, Ref } from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import { EnumGender } from 'src/user/user.interface';

export interface ConversationModel extends Base{}

export class ConversationModel extends TimeStamps{

    @prop({unique:true})
    email:string

    @prop()
    name:string

    @prop({default:false})
    isVerified:boolean

    @prop()
    birthDate:string

    @prop()
    city:string
    
    @prop({enum: EnumGender})
    gender:string

    @prop()
    avatarPath:string

    @prop({default:[], ref:()=>ConversationModel})
    friends:Ref<ConversationModel>[]

}
