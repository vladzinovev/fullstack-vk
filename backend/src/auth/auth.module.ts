import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigModule } from '@nestjs/config';
import { SessionSerializer } from './serializer';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';

@Module({
  controllers: [AuthController],

  providers: [
    AuthService, 
    GoogleStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],

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

  exports: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
