import { Controller, Get,Req, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @Auth()
  async googleAuth(@Req() req){}

  @Get('google/redirect')
  @Auth()
  async googleAuthRedirect(@Req() req){
    return this.authService.googleLogin(req)
  }
}
