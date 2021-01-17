import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
    @Get('login')
    login(){}

    @Get('redirect')
    redirect(@Res() res: Response ){
        res.send(200);
    }

    @Get('status')
    status(){}
    @Get('logout')
    logout(){}
}
