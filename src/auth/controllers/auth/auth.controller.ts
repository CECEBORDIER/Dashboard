import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { discordAuthGuard } from 'src/auth/guards';


@Controller('auth')
export class AuthController {
    @Get('login')
    @UseGuards(discordAuthGuard)
    login() { }

    @Get('redirect')
    redirect(@Res() res: Response) {
        res.send(200);
    }

    @Get('status')
    status() { }
    @Get('logout')
    logout() { }
}
