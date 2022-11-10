import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypegooseModule} from 'nestjs-typegoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { getMongoConfig } from './config/mongo.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:getMongoConfig,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
