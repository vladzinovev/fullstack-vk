
import { Controller, Get,Req, } from '@nestjs/common';
import { AuthGoogle } from '../google/auth-google.decorator';
import { Auth } from '../jwt/auth.decorators';
import { AuthService } from '../jwt/auth.service';


@Controller('auth/google')
export class GoogleAuthController {
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