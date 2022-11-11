import { Controller, Get,Req, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGoogle } from './decorators/auth-google.decorator';
import { Auth } from './decorators/auth.decorators';

@Controller('auth/google')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @AuthGoogle()
  async googleAuth(@Req() req){}

  @Get('redirect')
  @AuthGoogle()
  async googleAuthRedirect(@Req() req){
    return this.authService.googleLogin(req)
  }

  @Get('logout')
  @Auth()
  async googleAuthLogout(@Req() req){
    return this.authService.googleLogout(req)
  }

}
