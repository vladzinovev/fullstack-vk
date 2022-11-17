import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypegooseModule} from 'nestjs-typegoose';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { getMongoConfig } from './config/mongo.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport'
import { MessageModel } from './message/message.model';
import { PostModel } from './post/post.model';
import { CommentModel } from './comment/comment.model';
//import { ConversationModel } from './conversation/conversation.model';
import { LogLikesModel } from './log-likes/log-likes.model';
import { MediaModule } from './file/media.module';
import { ConversationModel } from './conversation/conversation.model';


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
    MessageModel,
    PostModel,
    CommentModel,
    LogLikesModel,
    ConversationModel,
    MediaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
