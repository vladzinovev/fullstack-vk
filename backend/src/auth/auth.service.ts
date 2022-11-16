import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from 'nestjs-config';
import { InjectModel } from 'nestjs-typegoose';
import { firstValueFrom, lastValueFrom, map } from 'rxjs';
import { UserModel } from 'src/user/user.model';
import { ModelType } from 'typegoose';
import { IGoogleProfile, I
    static logout() {
        throw new Error("Method not implemented.");
    }ResGoogleUser } from './auth.interface';
import { GoogleCodeDto } from './dto/google-code.dto';

@Injectable()
export class AuthService {

    constructor(@InjectModel(UserModel) private readonly UserModel:ModelType<UserModel>,private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
    ){}

    async validateUser(details: IResGoogleUser) {
        let user = await this.UserModel.findOne({ email:details.email });
        if (!user) user= await this.UserModel.create(details);
        return {
            user, 
            accessToken:await this.issueAccessToken(String(user._id))
        }
    }

    async issueAccessToken(userId:string){
        const data={_id:userId}

        return await this.jwtService.signAsync(data,{
            expiresIn:'31d'
        })
    }

    async getGoogleToken(code:string){
        return firstValueFrom(
            this.httpService.post<{access_token:string}>('https://oauth2.googleapis.com/token',
                {
                    code,
                    client_id:this.configService.get('GOOGLE_CLIENT_ID'),
                    client_secret:this.configService.get('GOOGLE_SECRET'),
                    redirect_uri:'http://localhost:3000/google-auth',
                    grant_type:'authorization_code'
                    
                }
            ).pipe(map((res)=>res.data))
        )
    }

    async getGoogleProfile(accessToken:string){
        return firstValueFrom(
            this.httpService.get<IGoogleProfile>('https://www.googleapis/oauth2/v3/userinfo',
                {
                    headers:{
                        Authorization:`Bearer ${accessToken}`
                    }
                    
                }
            ).pipe(map((res)=>res.data))
        )
    }

    async googleLogin({code}:GoogleCodeDto){
        if (!code){
           throw new BadRequestException('Google code not found!')
        }

        try{
            const {access_token} = await this.getGoogleToken(code)
            const profile=await this.getGoogleProfile(access_token)
            return this.validateUser({
                email:profile.email,
                name:profile.name,
                avatarPath:profile.picture
            })

        } catch(e){
            throw new UnprocessableEntityException(e.response.data, e.response.status)
        }

        return
    }

}
