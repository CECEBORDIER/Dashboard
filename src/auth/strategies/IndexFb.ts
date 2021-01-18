import { Profile, Strategy } from 'passport-discord';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor() {
        super({
            clientID:process.env.FACEBOOK_CLIENT_ID,
            clientSecret:process.env.FACEBOOK_CLIENT_SECRET,

            scope: ["emails", "name"]
        });
    }
        async validate(accessToken: string, refreshToken: string, profile: Profile){
            const { username, discriminator, id, avatar } = profile;

        }

    }
