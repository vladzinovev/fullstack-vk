import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { ModelType } from 'typegoose';
import { IGoogleProfile, IResGoogleUser } from './auth.interface';

@Injectable()
export class AuthService {

    constructor(@InjectModel(UserModel) private readonly UserModel:ModelType<UserModel>,private jwtService: JwtService){}

    async validateUser(details: IResGoogleUser) {
        const user = await this.UserModel.findOne({ email:details.email });
        if (!user) return this.UserModel.create(details);
        return user
    }

    login(user: IGoogleProfile) {
        const payload: JwtPayload = { username: user.username, sub: user.id };
        return {
        accessToken: this.jwtService.sign(payload),
        };
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
