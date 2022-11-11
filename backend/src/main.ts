import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(4200);

  app.use(
    session({
      cookie: {
        maxAge: 86400000,
      },
      secret: 'dahdgasdjhsadgsajhdsagdhjd',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
}
bootstrap();
