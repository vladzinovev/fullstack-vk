import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';


import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../jwt/auth.service';
import { IGoogleProfile, IResGoogleUser } from '../jwt/auth.interface';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_SECRET'),
      callbackURL: 'http://localhost:4200/api/auth/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: IGoogleProfile){
    const { displayName, emails, photos } = profile
    return this.authService.validateUser({
      email: emails[0].value,
      name: displayName,
      avatarPath: photos[0].value,
    })
  }
}