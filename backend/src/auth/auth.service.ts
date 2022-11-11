import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { ModelType } from 'typegoose';
import { IGoogleProfile } from './auth.interface';

@Injectable()
export class AuthService {

    constructor(@InjectModel(UserModel) private readonly UserModel:ModelType<UserModel>){}

    async validateUser(details: IGoogleProfile) {
        const { discordId } = details;
        const user = await this.UserModel.findOne({ discordId });
        if (user) {
            await this.UserModel.updateOne({ discordId }, details);
            console.log('Updated');
            return user;
        }
        return this.UserModel.create(details);
    }

    googleLogin(req){
        if (!req.user){
            return 'No user from google'
        }

        return{
            message:'User information from google',
            user: req.user
        }
    }

    googleLogout(req){
        req.logout()
        return
    }
}
