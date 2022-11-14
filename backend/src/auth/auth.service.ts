import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { ModelType } from 'typegoose';
import { IGoogleProfile, IResGoogleUser } from './auth.interface';
import { GoogleCodeDto } from './dto/google-code.dto';

@Injectable()
export class AuthService {

    constructor(@InjectModel(UserModel) private readonly UserModel:ModelType<UserModel>,private readonly jwtService: JwtService){}

    async validateUser(details: IResGoogleUser) {
        const user = await this.UserModel.findOne({ email:details.email });
        if (!user) return this.UserModel.create(details);
        return user
    }

    async issueAccessToken(userId:string){
        const data={_id:userId}

        return await this.jwtService.signAsync(data,{
            expiresIn:'31d'
        })
    }

    async googleLogin({code}:GoogleCodeDto){
        if (!code){
           throw new BadRequestException('Google code not found!')
        }

        return
    }

}
