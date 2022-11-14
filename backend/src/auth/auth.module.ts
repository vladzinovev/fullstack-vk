import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';

@Module({
  controllers: [AuthController],

  providers: [AuthService,],

  imports: [
    ConfigModule, 
    TypegooseModule.forFeature([
      {
        typegooseClass:UserModel,
        schemaOptions:{
          collection:'User'
        }
      }
    ])
  ],
})
export class AuthModule {}
