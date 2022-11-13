import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypegooseModule} from 'nestjs-typegoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { getMongoConfig } from './config/mongo.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/jwt/auth.module';
import { PassportModule } from '@nestjs/passport';
import { GoogleAuthModule } from './auth/google/google-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PassportModule.register({session:true}),
    TypegooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:getMongoConfig,
    }),
    UserModule,
    GoogleAuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
