import { Controller, Get, Req} from '@nestjs/common';
import { Auth } from './auth.decorators';
import { AuthService } from './auth.service';

@Controller('auth/google')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Get('login')
    async googleAuth(){}
}
