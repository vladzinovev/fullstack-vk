export interface IUser{
    _id:string
    email:string
    name:string
    isVerified?:boolean
    birthDate?:string
    city?:string
    gender?:string
    avatarPath:string
    friends?:IUser[]
}