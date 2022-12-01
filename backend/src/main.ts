import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(4200);
  /* app.enableCors({
    origin:'http://localhost:3000',
    methods:['GET','POST']
  }); */
}
bootstrap();
