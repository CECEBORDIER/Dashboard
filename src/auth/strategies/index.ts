import { Profile, Strategy } from 'passport-discord';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DicordStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID:process.env.DISCORD_CLIENT_ID,
            clientSecret:process.env.DISCORD_CLIENT_SECRET,
            callbaclURL: process.env.DISCORD_CALLBACK_URL,
            scope: ['identify', 'guilds']
        });
    }
        async validate(accessToken: string, refreshToken: string, profile: Profile){
            const { username, discriminator, id, avatar } = profile;

        }

    }






