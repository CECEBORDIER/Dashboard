declare namespace NodeJS {

    export interface ProcessEnv {
        ENVIRONMENT: Environment;
        DISCORD_CLIENT_ID?: string;
        DISCORD_CLIENT_SECRET?: string;
        DISCORD_CALLBACK_URL?: string;

        FACEBOOK_CLIENT_ID?: string;
        FACEBOOK_CLIENT_SECRET?: string;
        FACEBOOK_CALLBACK_URL?: string;
}
export type Environment = 'DEVELOPMENT' | 'PRODUCTION' | 'TEST';
}