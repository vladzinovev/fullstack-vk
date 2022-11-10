import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { compare, genSalt, hash } from 'bcryptjs';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
    googleLogin(req){
        if (!req.user){
            return 'No user from google'
        }

        return{
            message:'User information from google',
            user: req.user
        }
    }
}
