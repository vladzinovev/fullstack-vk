import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { getJWTConfig } from 'src/config/jwt.config';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [AuthController],

  providers: [AuthService, JwtStrategy],

  imports: [
    ConfigModule, 
    TypegooseModule.forFeature([
      {
        typegooseClass:UserModel,
        schemaOptions:{
          collection:'User'
        }
      }
    ]),
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigModule],
      useFactory:getJWTConfig
    }),
    HttpModule
  ],
})
export class AuthModule {}
