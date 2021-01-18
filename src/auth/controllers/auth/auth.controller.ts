import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { discordAuthGuard } from 'src/auth/guards';
import { facebookAuthGuard } from 'src/auth/guards/indexFb';


@Controller('auth')
export class AuthController {
    @Get('login')
    @UseGuards(discordAuthGuard)
    login() { }

    @Get('redirect')
    redirect(@Res() res: Response) {
        res.send(200);
    }

    @Get("/facebook")
    @UseGuards(facebookAuthGuard)
    facebookLogin(){

    }
}
